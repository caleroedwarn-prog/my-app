import { useState } from "react";
function Toggle(){
    const [isOpen, setIsOpen] = useState(false);
    return (
      <>
        <button onClick={() => setIsOpen((prev) => !prev)}> toggle</button>
        {isOpen && (
          <p>
            I am the best coding enthusiac in the Faculty of engineering and
            technology buea
          </p>
        )}
      </>
    );
}
export default Toggle;