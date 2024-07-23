import React from "react";

function Container({ children }: { children: React.ReactNode }) {
  return (
    <main className=" ">
      <div className="lg:flex block">
        <div className="lg:bg-pattern-desktop bg-pattern-mobile lg:h-auto h-[224px]">
          <ul className="list-none flex lg:flex-col flex-row gap-3 justify-center">
            <li className="gap-4 flex items-center">
              <span className="border-neutral-white">1</span>
              <div className="hidden lg:block">
                <p>Step 1</p>
                <h4 className="font-bold">Your info</h4>
              </div>
            </li>
            <li className="gap-4 flex items-center">
              <span className="">2</span>

              <div className="hidden lg:block">
                <p>Step 2</p>
                <h4 className="">Select plan</h4>
              </div>
            </li>
            <li className="gap-4 flex items-center">
              <span className="">3</span>

              <div className="hidden lg:block">
                <p>Step 3</p>
                <h4 className="">Add-ons</h4>
              </div>
            </li>
            <li className="gap-4 flex items-center">
              <span className="">4</span>

              <div className="hidden lg:block">
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
