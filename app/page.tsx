import Image from "next/image";
import { arcadeIcon } from "@/public/assets/images";
export default function Home() {
  return (
    <form className="font-bold">
      <div id="tab">
        <h1>Personal info</h1>
        <p>Please provide your name, email address, and phone number.</p>
        <div className="">
          <label htmlFor="name">Name</label>
          <p>This field is required</p>
        </div>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="e.g. Stephen King"
        />
        <div className="">
          <label htmlFor="email">Email Address</label>
          <p>This field is required</p>
        </div>
        <input
          type="text"
          name="email"
          id="email"
          placeholder="e.g. stephenking@lorem.com"
        />
        <div className="">
          <label htmlFor="phone">Phone Number</label>
          <p>This field is required</p>
        </div>
        <input
          type="text"
          name="phone"
          id="phone"
          placeholder="e.g. +1 234 567 890"
        />
      </div>
      <div id="tab">
        <h1>Pick add-ons</h1>
        <p>You have the option of monthly or yearly billing.</p>
        <div className="flex">
          <div className="">
            <input type="radio" name="plan" value="Arcade" id="Arcade" />
            <Image src={arcadeIcon} alt="" />

            <h3>Arcade</h3>
            <p id="pricing">
              $ <span>9</span>/ <span>mo</span>
            </p>
          </div>
          <div className="">
            <input type="radio" name="plan" value="Advanced" id="Advanced" />
            {/* <Image src="assets/images/icon-advanced.svg" alt="" /> */}
            <h3>Advanced</h3>
            <p id="pricing">$12/mo</p>
          </div>
          <div className="">
            <input type="radio" name="plan" value="Pro" id="Pro" />

            {/* <Image src="assets/images/icon-pro.svg" alt="" /> */}
            <h3>Pro</h3>
            <p id="pricing">$15/mo</p>
          </div>
        </div>
        <div className="flex">
          <label htmlFor="month">Monthly</label>
          <input type="radio" name="date" id="month" />
          <input type="radio" name="date" id="year" />
          <label htmlFor="year">Yearly</label>
        </div>
      </div>
      <div id="tab">
        <h1>Select your plan</h1>
        <p>Add-ons help enhance your gaming experience.</p>
        <div className="" id="checkboxesContainer">
          <input type="text" name="onlineService" id="onlineService" />
          <div className="">
            <h4>Online service</h4>
            <p>Access to multiplayer games</p>
            <p id="pricing">$15/mo</p>
          </div>
          <div className="">
            <h4>Larger storage</h4>
            <p>Extra 1TB of cloud save</p>
            <p id="pricing">$15/mo</p>
          </div>
          <div className="">
            <h4>Customizable Profile</h4>
            <p>Custom theme on your profile</p>
            <p id="pricing">$15/mo</p>
          </div>
        </div>
      </div>
      <div id="tab">
        <h1>Finishing up</h1>
        <p>Double-check everything looks OK before confirming.</p>
        <div className="">
          <div>
            <div className="flex">
              <h3>
                <span>Arcade</span>( <span id=""> Monthly </span>)
              </h3>
              <p id="pricing">$15/mo</p>
            </div>
            <p>Change</p>
          </div>
          <div>
            <div className="flex">
              <h3>online service</h3>
              <p id="pricing">$15/mo</p>
            </div>
          </div>
          <div>
            <div className="flex">
              <h3>Larger storage</h3>
              <p id="pricing">$15/mo</p>
            </div>
          </div>
        </div>
        <div className="flex">
          <p id="total">
            Total (per <span>Mo</span> )
          </p>
          <p id="pricingtotal">
            +$<span>12</span>/<span>Mo</span>
          </p>
        </div>
      </div>
      <div id="tab">
        {/* <Image src="assets/images/icon-thank-you.svg" alt="" /> */}
        <h1>Thank you!</h1>
        <p>
          Thanks for confirming your subscription! We hope you have fun using
          our platform. If you ever need support, please feel free to email us
          at support@loremgaming.com.
        </p>
      </div>
      <div id="buttons">
        <button type="button" id="return">
          Go Back
        </button>
        <button type="button" id="next">
          Next Step
        </button>
      </div>
    </form>
  );
}
