import React , {useState} from "react";
import { Menu, Transition } from "@headlessui/react";


function  HandleHover(){
    const [initialPosition, setInitialPosition] = useState(null);
    const [htmlContent, setHtmlContent] = useState(null);


    const handleHover = (event) => {
        // Generate HTML content dynamically
        const dynamicHtml = (
            <div>
                <p className="text-white">Facebook</p>
            </div>
        );

        // Set the HTML content and store the initial position when the mouse enters
        setHtmlContent(dynamicHtml);
        setInitialPosition({
            x: event.clientX,
            y: event.clientY
        });
    };

    const handleMouseLeave = () => {
        // Reset HTML content and position when the mouse leaves
        setHtmlContent(null);
        setInitialPosition(null);
    };

  

    return(
        <div
        onMouseEnter={handleHover}
        onMouseLeave={handleMouseLeave}
        
    >
        <Menu>
        {htmlContent && <div>{htmlContent}</div>}
            <div>
              <Menu.Button className="inline-flex cursor-pointer items-center justify-center rounded-xl   px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:border-primary-accent hover:bg-primary-accent focus:outline-none focus:ring-2  focus:ring-offset-0 disabled:opacity-30 disabled:hover:border-primary disabled:hover:bg-primary disabled:hover:text-white ">
              <svg
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="h-4 w-4"
                  >
                    <path d="M11.4758 8.88543L11.8904 6.15533H9.2968V4.38446C9.2968 3.63737 9.65845 2.90873 10.8201 2.90873H12V0.58446C12 0.58446 10.9297 0.399994 9.90685 0.399994C7.76986 0.399994 6.37443 1.70786 6.37443 4.07456V6.15533H4V8.88543H6.37443V15.4856C6.85114 15.5613 7.33881 15.6 7.83562 15.6C8.33242 15.6 8.82009 15.5613 9.2968 15.4856V8.88543H11.4758Z" />
                  </svg>
            </Menu.Button>
            </div>
            </Menu>
            
    </div>
    )
}

export default HandleHover;