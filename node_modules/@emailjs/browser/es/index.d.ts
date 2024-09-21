import type { StorageProvider } from './types/StorageProvider';
import { EmailJSResponseStatus } from './models/EmailJSResponseStatus';
import { init } from './methods/init/init';
import { send } from './methods/send/send';
import { sendForm } from './methods/sendForm/sendForm';
export type { StorageProvider };
export { init, send, sendForm, EmailJSResponseStatus };
declare const _default: {
    init: (options: string | import("./types/Options").Options, origin?: string) => void;
    send: (serviceID: string, templateID: string, templateParams?: Record<string, unknown> | undefined, options?: string | import("./types/Options").Options | undefined) => Promise<EmailJSResponseStatus>;
    sendForm: (serviceID: string, templateID: string, form: string | HTMLFormElement, options?: string | import("./types/Options").Options | undefined) => Promise<EmailJSResponseStatus>;
    EmailJSResponseStatus: typeof EmailJSResponseStatus;
};
export default _default;
