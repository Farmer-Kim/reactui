import React, { useState, ReactNode, useRef, useCallback } from "react";
import "./Accordion.css";

interface AccordionProps {
    /**
   * Accordion title
   */
    title?: string | ReactNode;
    /**
   * Accordion contents
   */
    contents?: string | ReactNode;
}

const Accordion:React.FC<AccordionProps> = React.memo(({title, contents}:AccordionProps) => {
    const [isCollapse, setIsCollapse] = useState(false);
    const parentRef = useRef<HTMLDivElement>(null);
    const childRef = useRef<HTMLDivElement>(null);
    const parentRefHeight = parentRef.current?.style.height ?? '0px';
    const buttonText = parentRefHeight === '0px' ? '열기' : '닫기';

    const handleButtonClick = useCallback((e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        e.stopPropagation();
        if (parentRef.current === null || childRef.current === null) {
            return;
        }
        if (parentRef.current.clientHeight > 0) {
            parentRef.current.style.height = "0";
        } else {
            parentRef.current.style.height = `${childRef.current.clientHeight}px`;
        }
        setIsCollapse(!isCollapse);
    }, [isCollapse]);

    return (
        <div className="accordion-container">
            <div className="accordion-header">
                {title}
                <div className="accordion-button" onClick={handleButtonClick}>
                    {buttonText}
                </div>
            </div>
            <div ref={parentRef} className="accordion-contents-wrapper">
                <div ref={childRef} className="accordion-contents">
                    {contents}
                </div>
            </div>
        </div>
    );
})

export default Accordion;
