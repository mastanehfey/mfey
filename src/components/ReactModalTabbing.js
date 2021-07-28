import React, { useState, useEffect } from 'react';

const ReactModalTabbing = ({ containerRef, children }) => {
    const [configuredTabIndexes, setConfiguredTabIndexes] = useState(false);

    const focusableElements = () => {
        // found this function body here https://zellwk.com/blog/keyboard-focusable-elements/
        return [...containerRef?.current?.querySelectorAll(
            'a, button, input, textarea, select, details, [tabindex]:not([tabindex="-1"]):not([type="hidden"])'
        )].filter(el => !el.hasAttribute('disabled'));
    }

    const isTabbable = (element) =>{
        if(element.getAttribute('tabindex')){
            return true;
        }
        return false;
    }

    const findElementByTabIndex = (tabIndex) => {
        return containerRef?.current?.querySelector(`[tabindex="${tabIndex}"]`);
    }
    
    const moveFocusToTabIndex = (tabIndex) => {
        findElementByTabIndex(tabIndex)?.focus();
    }

    const handleKeyDownEvent = (event) => {
        if(!isTabbable(event.target)){
            return;
        }

        const tabIndex = parseInt(event.target.getAttribute('tabindex'));

        if(event.shiftKey && event.key === 'Tab'){
            moveFocusToTabIndex(tabIndex - 1);
        }else if(event.key === 'Tab'){ //should probably make sure there is no other modifier key pressed.
            moveFocusToTabIndex(tabIndex + 1);
        }
    }

    useEffect(() => {
        if(!configuredTabIndexes && containerRef.current){
            setConfiguredTabIndexes(true);
            focusableElements().forEach((el, index) => el.setAttribute('tabindex', index + 1));
            containerRef?.current?.addEventListener('keydown', handleKeyDownEvent);
        }
    });

    return children;
}

export default ReactModalTabbing;