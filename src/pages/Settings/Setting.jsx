import React from "react";
function Setting() {
  return (
    <>
      <div className="bg-gray-700 p-6 dark:text-white shadow-lg">
        <h1 className="text-2xl font-semibold">Settings</h1>
        <p className="my-4">
          This is the settings page. You can change your app settings here.
        </p>
        <div className="flex space-x-4">
          <div className="w-1/2">
            <label className="block text-sm font-medium dark:text-white">
              Dark Mode
            </label>
            <div className="mt-1">
              <input
                type="checkbox"
                className="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-offset-0 focus:ring-indigo-200"
              />
            </div>
          </div>
          <div className="w-1/2">
            <label className="block text-sm font-medium dark:text-white">
              Notifications
            </label>
            <div className="mt-1">
              <input
                type="checkbox"
                className="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-offset-0 focus:ring-indigo-200"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Setting;
