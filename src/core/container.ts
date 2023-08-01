import type {interfaces} from 'inversify';
import {Container} from 'inversify';

function logger(planAndResolve: interfaces.Next): interfaces.Next {
  return (args: interfaces.NextArgs) => {
    const result = planAndResolve(args);
    // Do something with the result
    return result;
  };
}

const container = new Container({
  /**
   * Set this to true to force the container ignore injected base classes
   * Note: We will check it later
   */
  skipBaseClassChecks: true,
});
container.applyMiddleware(logger);

export default container;
