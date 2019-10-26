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

import { ICommandDefinition } from "@zowe/imperative";
/**
 * Command one [object] defintion. This definition is of imperative type "command" and therefore must have a
 * command handler (which performs the "work" for this command).
 *
 * In this case, "error-messages" will simply print console error (stderr) messages.
 *
 * Property Summary:
 * =================
 * "name" of the [object]. Should be a noun (e.g. data-set)
 * "aliases" normally contains a shortened form of the command
 * "summary" will display when issuing the help on this [objects] [action]
 * "type" is "command" which means a handler is required
 * "handler" is the file path to the handler (does the work)
 * "options" an array of options
 */
export const ListReviewsDefinition: ICommandDefinition = {
    name: "reviews",
    aliases: ["r"],
    summary: "Returns a collection of all reviews",
    description: "Returns a collection of all reviews, ordered by ascending created_at, 1000 at a time.",
    type: "command",
    handler: __dirname + "/Reviews.handler",
    positionals: [
    ],
    options: [{ // todo: define a constant for this
        name: "token",
        aliases: ["t"],
        required: true,
        type: "string",
        description: "Your WaniKani API token"
    }],
    outputFormatOptions: true
};
