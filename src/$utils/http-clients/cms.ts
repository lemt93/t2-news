interface CmsClientInterface {
    query(str): Promise<any>;
}

let config = {};

const cmsClient = new Proxy(config, {
    get: (target, prop) => {},
    set: () => true
});


