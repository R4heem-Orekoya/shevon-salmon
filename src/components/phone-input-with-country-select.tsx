"use client"

import React from "react"
import { PhoneIcon } from "lucide-react"
import * as RPNInput from "react-phone-number-input"
import flags from "react-phone-number-input/flags"
import { cn } from "@/lib/utils"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger } from "@/components/ui/select"
import { TMessageFormSchema } from "@/lib/schemas"
import { useFormContext, Controller } from "react-hook-form"


export default function PhoneInputWithCountrySelect() {
   const { control } = useFormContext<TMessageFormSchema>()

   const popularCountries = [
      "US", // United States
      "CA", // Canada
      "GB", // United Kingdom
      "DE", // Germany
      "FR", // France
      "AU", // Australia
      "IN", // India
      "NG", // Nigeria
      "ZA", // South Africa
      "AE", // United Arab Emirates
      "SG", // Singapore
      "NL", // Netherlands
      "PH", // Philippines
      "MY", // Malaysia
      "BR", // Brazil
      "MX", // Mexico
   ] as RPNInput.Country[]

   return (
      <div className="*:not-first:mt-2" dir="ltr">
         <Label htmlFor={"phone"}>Phone Number<span className="text-red-500 ml-1">*</span></Label>
         <Controller
            name="phoneNumber"
            control={control}
            render={({ field }) => (
               <RPNInput.default
                  className="flex rounded-md shadow-xs"
                  countries={popularCountries}
                  international
                  flagComponent={FlagComponent}
                  countrySelectComponent={CountrySelect}
                  inputComponent={PhoneInput}
                  id={"phone"}
                  placeholder="Enter phone number (e.g. +2348012345678)"
                  value={field.value} 
                  onChange={(newValue) => field.onChange(newValue ?? "")}
               />
            )}
         />
      </div>
   )
}

const PhoneInput = ({ className, ...props }: React.ComponentProps<"input">) => {
   return (
      <Input
         data-slot="phone-input"
         className={cn(
            "-ms-px rounded-s-none shadow-none focus-visible:z-10",
            className
         )}
         {...props}
      />
   )
}

PhoneInput.displayName = "PhoneInput"

type CountrySelectProps = {
   disabled?: boolean
   value: RPNInput.Country
   onChange: (value: RPNInput.Country) => void
   options: { label: string; value: RPNInput.Country | undefined }[]
}

const CountrySelect = ({
   disabled,
   value,
   onChange,
   options,
}: CountrySelectProps) => {
   return (
      <Select
         disabled={disabled}
         value={value}
         onValueChange={(value: string) => {
            onChange(value as RPNInput.Country)
         }}
         aria-label="Select country"
      >
         <SelectTrigger className="w-fit rounded-r-none focus-visible:ring-0">
            <FlagComponent country={value} countryName={value} aria-hidden="true" />
         </SelectTrigger>

         <SelectContent>
            <SelectGroup>
               <SelectLabel>Countries</SelectLabel>
               {options
                  .filter((x) => x.value)
                  .map((option, i) => (
                     <SelectItem key={option.value ?? `empty-${i}`} value={option.value ?? "US"}>
                        {option.label}{" "}
                        {option.value &&
                           `+${RPNInput.getCountryCallingCode(option.value)}`}
                     </SelectItem >
                  ))}
            </SelectGroup>
         </SelectContent>
      </Select>
   )
}

const FlagComponent = ({ country, countryName }: RPNInput.FlagProps) => {
   const Flag = flags[country]

   return (
      <span className="w-5 overflow-hidden rounded-sm">
         {Flag ? (
            <Flag title={countryName} />
         ) : (
            <PhoneIcon size={16} aria-hidden="true" />
         )}
      </span>
   )
}
