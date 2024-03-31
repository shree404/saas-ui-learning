import React , {useState} from "react";
import { Menu, Transition } from "@headlessui/react";


function  HandleHoverInsta(){
    const [initialPosition, setInitialPosition] = useState(null);
    const [htmlContent, setHtmlContent] = useState(null);


    const handleHover = (event) => {
        // Generate HTML content dynamically
        const dynamicHtml = (
            <div>
                <p className="text-white">Instagram</p>
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
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
  <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.6 0 12 0zm5.4 18.6c0 1.5-1.2 2.7-2.7 2.7H9.3c-1.5 0-2.7-1.2-2.7-2.7v-6.1h-1V12c0-2.5 2-4.5 4.5-4.5h4.8c2.5 0 4.5 2 4.5 4.5v6.1h-1V18.6zM12 6.9c-2 0-3.6 1.6-3.6 3.6s1.6 3.6 3.6 3.6 3.6-1.6 3.6-3.6-1.6-3.6-3.6-3.6z" />
</svg>
            </Menu.Button>
            </div>
            </Menu>
            
    </div>
    )
}

export default HandleHoverInsta;