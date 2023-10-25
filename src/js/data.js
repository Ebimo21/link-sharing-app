const platforms = [
    {
        text: "Facebook",
        image: "./icons/facebook.svg"
    },
    {
        text: "Google",
        image: "./icons/google.svg"
    },
];

export const protoEl = `<div class="flex items-center justify-between">
                                        <span class="font-bold">Link #1</span>
                                        <span class="bg-red-600 p-2 text-white font-bold rounded-lg cursor-pointer remove">Remove</span>
                                    </div>

                                    <div>
                                        <div>
                                            <span>Platform</span>
                                            <div class=" select-input relative group ">
                                                <div class="selectedOption relative w-full h-10 overflow-hidden  bg-slate-200 text-black p-2">
                                                    <div class=" flex justify-between items-center">
                                                        <div class="flex items-center justify-between w-full">
                                                            <span class="flex items-center gap-x-2">
                                                                <span class="platform-logo">
                                                                    <img src="./icons/question-mark.svg" width="14" height="14" />
                                                                </span>
                                                                <span class ="platform-text">Selected Item</span>
                                                            </span>
                                                            <span><img src="./icons/arrow-down.svg" class="group-[.isOpen]:rotate-180 duration-200 " width="20" height="20" /></span>
                                                        </div>
                                                        <span></span>
                                                    </div>
                                                </div>
                                                <div class=" absolute z-10 w-full h-20 overflow-scroll group-[.isOpen]:flex hidden select-dropdown bg-slate-100 p-1 flex-col gap-x-1 "></div>
                                            </div>
                                        </div>

                                        <div>
                                            <span>Link</span>
                                            <div>
                                                <div class="flex w-full px-2 bg-slate-200 h-10 outline-none ">
                                                    <div contenteditable class="link-text w-full grow pl-4 pr-4 py-2"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>`

export default platforms