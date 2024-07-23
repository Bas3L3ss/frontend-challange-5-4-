import React from "react";

function Container({ children }: { children: React.ReactNode }) {
  return (
    <main className="font-bold ">
      <div className="">
        <div className=" ">
          <ul className="">
            <li className=" ">
              <span className=" ">1</span>
              <div className="">
                <p>Step 1</p>
                <h4 className=" ">Your info</h4>
              </div>
            </li>
            <li className="">
              <span className="">2</span>

              <div className="">
                <p>Step 2</p>
                <h4 className="">Select plan</h4>
              </div>
            </li>
            <li className="">
              <span className="">3</span>

              <div className="">
                <p>Step 3</p>
                <h4 className="">Add-ons</h4>
              </div>
            </li>
            <li className="">
              <span className="">4</span>

              <div className="">
                <p>Step 4</p>
                <h4 className="">Summary</h4>
              </div>
            </li>
          </ul>
        </div>
        {children}
      </div>
    </main>
  );
}

export default Container;
