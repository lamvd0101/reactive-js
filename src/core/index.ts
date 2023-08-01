import container from './container';

export * from './container';
export * from './decorators';

/**
 * Module identifier.
 * Creates a service identifier to identify a class in container.
 */
export class ModuleIdentifier {
  private _id: symbol;

  constructor(name: string) {
    this._id = Symbol(name);
  }

  get id(): symbol {
    return this._id;
  }
}

/**
 * Get all modules from container
 */
export function getAllModules<T = any>(mID: ModuleIdentifier): T[] {
  return container.getAll<T>(mID.id);
}

/**
 * Get a module from container
 */
export function getModule<T = any>(mID: ModuleIdentifier): T {
  return container.get<T>(mID.id);
}

/**
 * Get a module with tag name from container
 */
export function getModuleWithTag<T = any>(
  mID: ModuleIdentifier,
  tag: string,
): T {
  return container.getTagged<T>(mID.id, mID.id, tag);
}
