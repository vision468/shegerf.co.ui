"use client";
import {
  ChangeEvent,
  HTMLAttributes,
  HTMLInputTypeAttribute,
  MouseEventHandler,
  useEffect,
  useState,
} from "react";
import TipTapTextEditorComponent from "./TipTap.TextEditor.component";
import { Button } from "@tremor/react";
import ImageUpload from "./ImageUpload.Form.component";

type InputCustomType = "image-uploader" | "text-editor" | "select";
type BasicFormProps = {
  description?: string;
  inputs: {
    name: string;
    labelName: string;
    type: HTMLInputTypeAttribute | InputCustomType;
    options?: {
      name: string;
      value: string;
    }[];
  }[];
  takeOff?: (p: Partial<BasicFormProps>) => void;
} & HTMLAttributes<HTMLFormElement>;

const BasicForm = ({
  children,
  className,
  description,
  inputs,
  title,
  takeOff,
  ...props
}: BasicFormProps) => {
  // Utility
  const getInputKeyValue = ({ inputs }: Pick<BasicFormProps, "inputs">) =>
    inputs.reduce(
      (acc, value) =>
        (acc = {
          ...acc,
          [value.name]: "",
        }),
      {}
    );

  // States
  const [values, setValues] = useState<{ [key: string]: any }>(
    getInputKeyValue({ inputs })
  );

  // Handler
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    e.preventDefault();
    // Validation

    // Update the state
    setValues((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  // Handler: string value change for n as field name
  const globalChangeHandler = (v: string, n: string) =>
    setValues((prevState) => ({ ...prevState, [n]: v }));
  // Handler: Text Editor change Handler

  const handleSubmitClicked: MouseEventHandler<HTMLButtonElement> = (e) => {
    takeOff && takeOff(values);
  };

  const handleResetClicked: MouseEventHandler<HTMLButtonElement> = (e) => {
    setValues(getInputKeyValue({ inputs }));
  };

  useEffect(() => {
    console.log(values["content"]);

    // return () => {
    //   setTimeout(() => console.clear(), 200);
    // };
  }, [values]);

  // Render
  return (
    <form
      {...props}
      action={"/api/forms"}
      className={`${className} p-8 my-4 bg-tremor-background-subtle rounded-tremor-default`}
      onSubmit={(e) => e.preventDefault()}
    >
      <hgroup className="bg-tremor-background-subtle text-tremor-content p-8">
        <h1 className="text-tremor-title font-bold">{title || "Form title"}</h1>
        <h3 className="text-tremor-default">
          {description || "form description"}
        </h3>
      </hgroup>
      <div>
        {inputs.map(({ name, labelName, type, options }, index) => (
          <div
            key={name}
            className="my-2 mx-8  items-center gap-4 bg-tremor-background-subtle p-2"
          >
            <label htmlFor={name} className="font-semibold block mb-1">
              {labelName} :
            </label>
            {/* Image Upload Field */}
            {type === "image-uploader" && (
              <div>
                <ImageUpload
                  content={values[name]}
                  takeOff={(imagePath) => globalChangeHandler(imagePath, name)}
                />
              </div>
            )}
            {/* Rich Text Editor */}
            {type === "text-editor" && (
              <div>
                <TipTapTextEditorComponent
                  content={values[name]}
                  takeOff={(HTMLContent) =>
                    globalChangeHandler(HTMLContent as string, name)
                  }
                />
              </div>
            )}
            {/* Select Field */}
            {type === "select" && (
              <select
                name={name}
                value={values[name]}
                onChange={handleChange}
                className="rounded-tremor-small shadow-tremor-input text-xl text-tremor-content-emphasis"
              >
                {options &&
                  options.map(({ name, value }, index) => (
                    <option key={name} value={value}>
                      {name}
                    </option>
                  ))}
              </select>
            )}
            {/* Other Field */}
            {!["image-uploader", "text-editor", "select"].includes(
              type.toString()
            ) && (
              <input
                name={name}
                type={type.toString()}
                value={values[name]}
                onChange={handleChange}
                className="rounded-tremor-small shadow-tremor-input text-xl px-2 text-tremor-content-emphasis"
              />
            )}
          </div>
        ))}
      </div>
      <br />
      <div className="mx-8 flex gap-4">
        <Button type="submit" variant="primary" onClick={handleSubmitClicked}>
          {"ثبت" || "Submit"}
        </Button>
        <Button type="reset" variant="secondary" onClick={handleResetClicked}>
          {"پاکسازی" || "Reset"}
        </Button>
      </div>
    </form>
  );
};

export default BasicForm;
