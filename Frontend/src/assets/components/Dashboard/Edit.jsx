import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useFormik } from "formik";
import React from "react";
import * as Yup from "yup";
import { Dashboard } from "../../Pages";

export default function Edit() {
  const blogValues = useFormik({
    initialValues: {
      title: "",
      description: "",
      imageURL: "",
    },
    validationSchema: Yup.object({
      title: Yup.string()
        .max(15, "Title should not be more than 15 characters")
        .required("complete your title"),
      description: Yup.string()
        .min(18, "content is quite small")
        .max(500, "content is large")
        .required("You have to start something"),
      imageURL: Yup.string(),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      let data = new FormData();
      data.append("imageURL", values.imageURL);
    },
  });
  return (
    <Dashboard>
      <div className="w-full my-5 pt-[10px]">
        <div className="flex gap-4 justify-center items-center">
          <h1 className="text-center text-3xl font-bold">Share your views</h1>
          <FontAwesomeIcon icon="fa-solid fa-pen" />
        </div>

        <form action="" onSubmit={blogValues.handleSubmit}>
          <div className="space-y-6 flex flex-col bg-white px-4 py-5 sm:p-6">
            <div className="grid grid-cols-3 gap-6">
              <div className="col-span-3 sm:col-span-2">
                <label
                  htmlFor="title"
                  className="block text-sm font-medium text-gray-700"
                >
                  Give us an entertaining title
                </label>
                <div className="flex gap-5 items-center">
                  <div className="mt-1 flex rounded-md shadow-md">
                    <span className="inline-flex items-center rounded-l-md  border-r-0 border-gray-300 bg-gray-50 px-3 text-sm text-gray-500 p-3">
                      Title
                    </span>
                    <input
                      type="text"
                      name="title"
                      id="title"
                      className="block w-full flex-1 rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm px-1"
                      placeholder="Your title here"
                      {...blogValues.getFieldProps("title")}
                    />
                  </div>
                  {blogValues.touched.title &&
                  blogValues.errors.title ? (
                    <div>{blogValues.errors.title}</div>
                  ) : null}
                </div>
              </div>

              <div className="col-span-3 sm:col-span-2">
                <label
                  htmlFor="content"
                  className="block text-sm font-medium text-gray-700"
                >
                  Write your content here
                </label>
                <div className="flex gap-5 items-center">
                  <div className="mt-1 flex flex-grow rounded-md shadow-sm">
                    <div className="w-full">
                      <textarea
                        id="description"
                        name="description"
                        rows={3}
                        className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-md focus:border-transparent focus:ring-transparent sm:text-sm h-[150px] overflow-auto resize-none"
                        placeholder="Content"
                        {...blogValues.getFieldProps("description")}
                      />
                    </div>
                  </div>
                  {blogValues.touched.description &&
                  blogValues.errors.description ? (
                    <div>{blogValues.errors.description}</div>
                  ) : null}
                </div>
              </div>

              <div className="col-span-3 sm:col-span-2">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Photo
                  </label>

                  <div className="mt-1 flex items-center">
                    {/* File Input */}
                    <label
                      htmlFor="imageURL"
                      className="mr-5 rounded-md border border-gray-300 bg-white py-2 px-3 text-sm font-medium leading-4 text-gray-700 shadow-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-transparent focus:ring-offset-2"
                    >
                      Add <FontAwesomeIcon icon="fa-solid fa-plus" />
                    </label>
                    <input
                      type="file"
                      id="imageURL"
                      name="imageURL"
                      accept="image/*"
                      className="hidden"
                      onChange={(e) =>
                        blogValues.setFieldValue("imageURL", e.target.files[0])
                      }
                    />

                    <span className="inline-block h-12 w-12 overflow-hidden bg-gray-100">
                      <svg
                        className="mx-auto h-12 w-12 text-gray-400"
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 48 48"
                        aria-hidden="true"
                      >
                        <path
                          d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex gap-2 justify-end">
              <button type="submit" className="self-end btn btn-outline">
                Publish
              </button>
              <button type="button" className="self-end btn btn-warning">
                Cancel
              </button>
            </div>
          </div>
        </form>
      </div>
    </Dashboard>
  );
}
