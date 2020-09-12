import { StorageProxy } from '../storage-proxy';

class ProxyStub extends StorageProxy {}

describe('StorageProxy', () => {
  let storageMock: Storage;
  let proxy: StorageProxy;

  beforeEach(() => {
    jest.resetAllMocks();

    storageMock = {
      clear: jest.fn(),
      getItem: jest.fn(),
      key: jest.fn(),
      removeItem: jest.fn(),
      setItem: jest.fn(),
      length: 0,
    };

    proxy = new ProxyStub(storageMock);
  });

  it('should proxy clear method', () => {
    proxy.clear();

    expect(storageMock.clear).toHaveBeenCalledTimes(1);
    expect(storageMock.getItem).not.toHaveBeenCalled();
    expect(storageMock.key).not.toHaveBeenCalled();
    expect(storageMock.removeItem).not.toHaveBeenCalled();
    expect(storageMock.setItem).not.toHaveBeenCalled();
  });

  it('should proxy getItem method', () => {
    proxy.getItem('test');

    expect(storageMock.getItem).toHaveBeenCalledTimes(1);
    expect(storageMock.getItem).toHaveBeenCalledWith('test');
    expect(storageMock.clear).not.toHaveBeenCalled();
    expect(storageMock.key).not.toHaveBeenCalled();
    expect(storageMock.removeItem).not.toHaveBeenCalled();
    expect(storageMock.setItem).not.toHaveBeenCalled();
  });

  it('should proxy key method', () => {
    proxy.key(10);

    expect(storageMock.key).toHaveBeenCalledTimes(1);
    expect(storageMock.key).toHaveBeenCalledWith(10);
    expect(storageMock.clear).not.toHaveBeenCalled();
    expect(storageMock.getItem).not.toHaveBeenCalled();
    expect(storageMock.removeItem).not.toHaveBeenCalled();
    expect(storageMock.setItem).not.toHaveBeenCalled();
  });

  it('should proxy removeItem method', () => {
    proxy.removeItem('test');

    expect(storageMock.removeItem).toHaveBeenCalledTimes(1);
    expect(storageMock.removeItem).toHaveBeenCalledWith('test');
    expect(storageMock.clear).not.toHaveBeenCalled();
    expect(storageMock.getItem).not.toHaveBeenCalled();
    expect(storageMock.key).not.toHaveBeenCalled();
    expect(storageMock.setItem).not.toHaveBeenCalled();
  });

  it('should proxy setItem method', () => {
    proxy.setItem('test', 'test');

    expect(storageMock.setItem).toHaveBeenCalledTimes(1);
    expect(storageMock.setItem).toHaveBeenCalledWith('test', 'test');
    expect(storageMock.clear).not.toHaveBeenCalled();
    expect(storageMock.getItem).not.toHaveBeenCalled();
    expect(storageMock.key).not.toHaveBeenCalled();
    expect(storageMock.removeItem).not.toHaveBeenCalled();
  });
});
