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

import { ICommandHandler, IHandlerParameters, TextUtils } from "@zowe/imperative";
import { WaniKaniSession } from "../../../api/WaniKaniSession";
import { WaniKaniReviews } from "../../../api/reviews/WaniKaniReviews";

/**
 * Command handler for listing directory contents
 * @export
 * @class DirectoryContentsHandler
 * @implements {ICommandHandler}
 */
export default class DirectoryContentsHandler implements ICommandHandler {

    /**
     * TODO: base handler
     *
     * Process the list directory contents command.
     * @param {IHandlerParameters} params
     * @returns {Promise<void>}
     * @memberof DirectoryContentsHandler
     */
    public async process(params: IHandlerParameters): Promise<void> {
        const session = new WaniKaniSession(params.arguments.token);
        const response = await WaniKaniReviews.listAll(session, {});
        params.response.format.output({
            output: response.data[0].data,
            header: true,
            format: "table"
        });
        params.response.console.log("Hello");
    }
}
