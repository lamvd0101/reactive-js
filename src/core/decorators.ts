import {inject as rawInject, injectable} from 'inversify';
import type {DecoratorTarget} from 'inversify/lib/annotation/decorator_utils';

import type {ModuleIdentifier} from '.';
import container from './container';

type ModuleConfigs = {
  type?: 'singleton' | 'instance';
  tag?: string;
  // We will enhance more configs in the future
};

/**
 * Inject a class into a class, that the class in the container.
 */
const inject = <T = any>(mID: ModuleIdentifier) => {
  return function (
    target: DecoratorTarget<unknown>,
    targetKey?: any,
    indexOrPropertyDescriptor?: any,
  ) {
    rawInject<T>(mID.id)(target, targetKey, indexOrPropertyDescriptor);
  };
};

/**
 * Auto connect a class to the container when import the class.
 * So, you no need to bind the class to the container manually.
 * NOTE: The class will a instance by default.
 */
function module<T = any>(mID: ModuleIdentifier, configs?: ModuleConfigs) {
  return function (target: new (...args: never) => T) {
    injectable()(target);
    const bindingToSyntax = container.bind<T>(mID.id).to(target);

    if (configs?.type === 'singleton') {
      bindingToSyntax.inSingletonScope();
    }

    if (configs?.tag) {
      bindingToSyntax.whenTargetTagged(mID.id, configs.tag);
    }
  };
}

export {inject, module};
