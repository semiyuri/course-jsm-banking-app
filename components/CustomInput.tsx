import React from "react";
import { FormField, FormLabel, FormControl, FormMessage } from "./ui/form";
import { Input } from "@/components/ui/input";
import { UseFormReturn, FieldPath, FieldValues } from "react-hook-form";

interface Props<T extends FieldValues> {
  formContext: UseFormReturn<T>;
  // control: Control<T>; // optionally can be used instead of formContext
  name: FieldPath<T>;
  label: string;
  placeholder?: string;
  type?: React.HTMLInputTypeAttribute;
}

const CustomInput = <T extends FieldValues>({
  formContext,
  name,
  label,
  placeholder,
  type,
}: Props<T>) => {
  return (
    <FormField
      control={formContext.control}
      name={name}
      render={({ field }) => (
        <div className="form-item flex-1">
          <FormLabel className="form-label">{label}</FormLabel>

          <div className="flex w-full flex-col">
            <FormControl>
              <Input
                id={name}
                placeholder={placeholder}
                className="input-class"
                type={type}
                {...field}
              />
            </FormControl>

            <FormMessage className="form-message mt-1" />
          </div>
        </div>
      )}
    />
  );
};

export default CustomInput;
