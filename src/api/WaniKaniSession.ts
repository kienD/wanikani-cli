/*
* This program and the accompanying materials are made available under the terms of the
* Eclipse Public License v2.0 which accompanies this distribution, and is available at
* https://www.eclipse.org/legal/epl-v20.html
*
* SPDX-License-Identifier: EPL-2.0
*
* Copyright Contributors to the Zowe Project.
*
*/

import { Session } from "@zowe/imperative";

export class WaniKaniSession extends Session {

    public token: string;

    constructor(token: string) {
        super({
            hostname: "api.wanikani.com",
            port: 443,
            rejectUnauthorized: true,
        });
        this.token = token;
    }

    public getAuthHeader(): any {
        return {
            Authorization: "Bearer " + this.token
        };
    }

}
