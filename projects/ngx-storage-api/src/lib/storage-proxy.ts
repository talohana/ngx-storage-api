export abstract class StorageProxy implements Storage {
  constructor(private readonly storage: Storage) {}

  get length(): number {
    return this.storage.length;
  }

  clear(): void {
    this.storage.clear();
  }

  getItem(key: string): string {
    return this.storage.getItem(key);
  }

  key(index: number): string {
    return this.storage.key(index);
  }

  removeItem(key: string): void {
    this.storage.removeItem(key);
  }

  setItem(key: string, value: string): void {
    this.storage.setItem(key, value);
  }
}
