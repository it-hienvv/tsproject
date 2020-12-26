import axios, {AxiosInstance, AxiosResponse, AxiosError} from 'axios';
import {Config, ErrorCode, HandlerEx} from 'constant';

type IC = {
    [key: string]: Function | null;
};

type CFRQ = {
    headerCustomize?: {};
    data?: {};
    params?: {};
};

type CFRP = {
    data: any;
    code: number;
};

const initHeader = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    'Accept-Charset': 'UTF-8',
    'Accept-Encoding': 'gzip',
};
const getClient = () => {
    const options = {
        timeout: 1000000,
        headers: initHeader,
    };

    const client = axios.create(options);
    client.interceptors.request.use(
        (config) => {
            return {
                ...config,
            };
        },
        (error) => {
            console.log(error, 'client.interceptors.request');
            return Promise.reject(error);
        },
    );

    client.interceptors.response.use((response) => {
        return response;
    });
    return client;
};

class ApiClient {
    client: AxiosInstance;
    cancelRequestInstance = axios.CancelToken;
    instanceCancel: IC;
    constructor() {
        this.client = getClient();
        this.instanceCancel = {};
    }

    initTokenCancel(url: string, token: Function): void {
        this.instanceCancel[url] = token;
    }

    // clear(): void {}
    // clean(): void {}
    handlerResponse<T>(response: T): T {
        return response;
    }

    handleError<T>(error: T): T {
        return error;
    }

    validRequest(): boolean {
        return false;
    }

    cancelRequest(url: string, message?: string) {
        if (message) {
            console.log(`cancelRequest from ${message}`);
        }
        if (this.instanceCancel[url]) {
            this.instanceCancel[url]?.();
            this.instanceCancel[url] = null;
        }
    }

    get(url: string, config: CFRQ): Promise<CFRP | AxiosError> {
        const {headerCustomize = {}, params = {}} = config;
        if (!this.validRequest()) {
            return Promise.reject('Error');
        }

        let timeoutConnect: NodeJS.Timeout;
        return Promise.race<Promise<AxiosResponse<CFRP>>>([
            this.client.get<CFRP, AxiosResponse<CFRP>>(url, {
                params: {
                    ...params,
                },
                headers: {
                    ...(headerCustomize && {...headerCustomize}),
                },
                cancelToken: new this.cancelRequestInstance((token) => {
                    this.initTokenCancel(url, token);
                }),
            }),
            new Promise((_, reject) => {
                if (timeoutConnect) clearTimeout(timeoutConnect);
                timeoutConnect = setTimeout(() => {
                    reject(
                        new HandlerEx.Exception(ErrorCode.API.connectTimeout),
                    );
                }, Config.API.timeoutConnect);
            }),
        ])
            .then((response) => {
                if (timeoutConnect) clearTimeout(timeoutConnect);
                return Promise.resolve(
                    this.handlerResponse<AxiosResponse<CFRP>>(response).data,
                );
            })
            .catch((err) => {
                if (timeoutConnect) clearTimeout(timeoutConnect);
                return Promise.reject(this.handleError<AxiosError>(err));
            });
    }

    post(url: string, config: CFRQ): Promise<CFRP> {
        const {headerCustomize = {}, data = {}, params = {}} = config;
        if (!this.validRequest()) {
            return Promise.reject('Error');
        }
        let timeoutConnect: NodeJS.Timeout;
        return Promise.race<Promise<AxiosResponse<CFRP>>>([
            this.client.post<CFRP, AxiosResponse<CFRP>>(url, data, {
                params: {
                    ...params,
                },
                headers: {
                    ...(headerCustomize && {...headerCustomize}),
                },
                cancelToken: new this.cancelRequestInstance((token) => {
                    this.initTokenCancel(url, token);
                }),
            }),
            new Promise((_, reject) => {
                if (timeoutConnect) clearTimeout(timeoutConnect);
                timeoutConnect = setTimeout(() => {
                    reject(
                        new HandlerEx.Exception(ErrorCode.API.connectTimeout),
                    );
                }, Config.API.timeoutConnect);
            }),
        ])
            .then((response) => {
                if (timeoutConnect) clearTimeout(timeoutConnect);
                return Promise.resolve(
                    this.handlerResponse<AxiosResponse<CFRP>>(response).data,
                );
            })
            .catch((err) => {
                if (timeoutConnect) clearTimeout(timeoutConnect);
                return Promise.reject(this.handleError<AxiosError>(err));
            });
    }

    put(url: string, config: CFRQ): Promise<CFRP> {
        const {headerCustomize = {}, data = {}, params = {}} = config;
        if (!this.validRequest()) {
            return Promise.reject('Error');
        }
        let timeoutConnect: NodeJS.Timeout;
        return Promise.race<Promise<AxiosResponse<CFRP>>>([
            this.client.put<CFRP, AxiosResponse<CFRP>>(url, data, {
                params: {
                    ...params,
                },
                headers: {
                    ...(headerCustomize && {...headerCustomize}),
                },
                cancelToken: new this.cancelRequestInstance((token) => {
                    this.initTokenCancel(url, token);
                }),
            }),
            new Promise((_, reject) => {
                if (timeoutConnect) clearTimeout(timeoutConnect);
                timeoutConnect = setTimeout(() => {
                    reject(
                        new HandlerEx.Exception(ErrorCode.API.connectTimeout),
                    );
                }, Config.API.timeoutConnect);
            }),
        ])
            .then((response) => {
                if (timeoutConnect) clearTimeout(timeoutConnect);
                return Promise.resolve(
                    this.handlerResponse<AxiosResponse<CFRP>>(response).data,
                );
            })
            .catch((err) => {
                if (timeoutConnect) clearTimeout(timeoutConnect);
                return Promise.reject(this.handleError<AxiosError>(err));
            });
    }

    delete(url: string, config: CFRQ): Promise<CFRP> {
        const {headerCustomize = {}, params = {}} = config;
        if (!this.validRequest()) {
            return Promise.reject('Error');
        }
        let timeoutConnect: NodeJS.Timeout;
        return Promise.race<Promise<AxiosResponse<CFRP>>>([
            this.client.delete<CFRP, AxiosResponse<CFRP>>(url, {
                params: {
                    ...params,
                },
                headers: {
                    ...(headerCustomize && {...headerCustomize}),
                },
                cancelToken: new this.cancelRequestInstance((token) => {
                    this.initTokenCancel(url, token);
                }),
            }),
            new Promise((_, reject) => {
                if (timeoutConnect) clearTimeout(timeoutConnect);
                timeoutConnect = setTimeout(() => {
                    reject(
                        new HandlerEx.Exception(ErrorCode.API.connectTimeout),
                    );
                }, Config.API.timeoutConnect);
            }),
        ])
            .then((response) => {
                if (timeoutConnect) clearTimeout(timeoutConnect);
                return Promise.resolve(
                    this.handlerResponse<AxiosResponse<CFRP>>(response).data,
                );
            })
            .catch((err) => {
                if (timeoutConnect) clearTimeout(timeoutConnect);
                return Promise.reject(this.handleError<AxiosError>(err));
            });
    }
}

export default ApiClient;
