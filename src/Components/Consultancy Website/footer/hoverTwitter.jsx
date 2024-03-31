import React , {useState} from "react";
import { Menu, Transition } from "@headlessui/react";


function  HandleHoverTW(){
    const [initialPosition, setInitialPosition] = useState(null);
    const [htmlContent, setHtmlContent] = useState(null);


    const handleHover = (event) => {
        // Generate HTML content dynamically
        const dynamicHtml = (
            <div>
                <p className="text-white">Twitter</p>
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
                    <path d="M14.038 4.78718C14.0442 4.92798 14.0442 5.06238 14.0442 5.20318C14.0504 9.47199 10.9141 14.4 5.17858 14.4C3.48695 14.4 1.82618 13.8944 0.400024 12.9472C0.646978 12.9792 0.893932 12.992 1.14089 12.992C2.54235 12.992 3.90677 12.5056 5.01188 11.6032C3.67833 11.5776 2.5053 10.6752 2.09783 9.35679C2.56704 9.45279 3.0486 9.43359 3.50547 9.29919C2.05461 9.00479 1.01123 7.67998 1.00506 6.13758C1.00506 6.12478 1.00506 6.11198 1.00506 6.09918C1.43723 6.34878 1.92496 6.48958 2.41887 6.50238C1.05445 5.55518 0.628457 3.66717 1.45575 2.18877C3.04243 4.21117 5.37614 5.43358 7.88272 5.56798C7.62959 4.44797 7.97533 3.27037 8.7841 2.47677C10.0374 1.25436 12.013 1.31836 13.1984 2.61757C13.896 2.47677 14.569 2.20797 15.1802 1.83037C14.9456 2.57917 14.4579 3.21277 13.8096 3.61597C14.427 3.53917 15.032 3.36637 15.6 3.11037C15.1802 3.76317 14.6493 4.32637 14.038 4.78718Z" />
                  </svg>
            </Menu.Button>
            </div>
            </Menu>
            
    </div>
    )
}

export default HandleHoverTW;