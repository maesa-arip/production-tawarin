import React from "react";

export default function HideScrollBar() {
    return (
        <div>
            <style
                dangerouslySetInnerHTML={{
                    __html: "\n\t::-webkit-scrollbar {\n\t\twidth: 0;\n\t}\n\n\t::-webkit-scrollbar-track {\n\t\t-webkit-box-shadow: inset 0 0 0px rgba(0, 0, 0, 0.3);\n\t}\n\n\t::-webkit-scrollbar-thumb {\n\t\tbackground-color: transparent;\n\t\toutline: 1px solid transparent;\n\t}\n",
                }}
            />
        </div>
    );
}
