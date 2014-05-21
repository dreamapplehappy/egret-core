/**
 * Copyright (c) Egret-Labs.org. Permission is hereby granted, free of charge,
 * to any person obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish, distribute,
 * sublicense, and/or sell copies of the Software, and to permit persons to whom
 * the Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included
 * in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,
 * INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
 * PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE
 * FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
 * ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

/// <reference path="AssetsContext.ts"/>
/// <reference path="../../resource/LoadingController.ts"/>
/// <reference path="../../resource/ResourceLoader.ts"/>

module ns_egret {


	/**
	 * @class ns_egret.HTML5AssetsContext
	 * @classdesc
	 * @extends ns_egret.AssetsContext
	 */
    export class HTML5AssetsContext extends AssetsContext {

        constructor() {
            super();
        }

		/**
		 * @method ns_egret.HTML5AssetsContext#createLoadingController
		 * @returns {LoadingController}
		 */
        public createLoadingController():LoadingController {
            return new LoadingController();
        }

		/**
		 * @method ns_egret.HTML5AssetsContext#getAssets
		 * @param url {string} 
		 * @returns {any}
		 */
        public getAssets(url:string):any {
            return ResourceLoader.create(url).data;
        }
    }


}