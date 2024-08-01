"use client";
import { User2 } from "lucide-react";
import { Label } from "../ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Input } from "../ui/input";
import { Fields, ROLES } from "@/data/mock";
import { FieldType } from "@/types/Main";
import { useEffect, useState } from "react";

export default function WebConfigure({ data, setData, savedRoles, setSavedRoles }: any) {
  const [roles, setRoles] = useState<any>([]);
  useEffect(() => {
    const temp = JSON.parse(localStorage.getItem('roles') || '[]');
    setRoles(temp)
    setSavedRoles(false)
  }, [savedRoles]);
  
  const convertTo2DArray = (arr: FieldType[]) => {
    let result = [];
    for (let i = 0; i < arr.length; i += 3) {
      result.push(arr.slice(i, i + 3));
    }
    return result;
  };

  const handleChange = (e: string) => {
    const obj = ROLES.find((i) => i.main_name == e) || roles.find((i:any) => i.main_name == e);
    const data = obj?.data;
    setData(data);
  };

  const handleFieldChange = (e: {
    target: { id: string | number; value: any };
  }) => {
    setData((prevData: any) => ({
      ...prevData,
      [e.target.id]: e.target.value,
    }));
  };

  return (
    <form className="grid w-full items-start gap-6">
      <fieldset className="grid gap-6 rounded-lg border p-4">
        <legend className="-ml-1 px-1 text-sm font-medium text-primary">
          Configure
        </legend>
        <div className="grid gap-3">
          <Label htmlFor="model">Role</Label>
          <Select onValueChange={handleChange}>
            <SelectTrigger
              id="model"
              className="items-start [&_[data-description]]:hidden"
            >
              <SelectValue placeholder="Select a role" />
            </SelectTrigger>
            <SelectContent>
              {ROLES.map((i) => {
                return (
                  <SelectItem key={i.id} value={i.main_name}>
                    <div className="flex items-start gap-3 text-muted-foreground">
                      <User2 className="size-5" />
                      <div className="grid gap-0.5">
                        <p>
                          {i.main_name}{" "}
                          <span className="font-medium text-foreground">
                            {i.company_name}
                          </span>
                        </p>
                        <p className="text-xs" data-description>
                          {i.ctc} CTC
                        </p>
                      </div>
                    </div>
                  </SelectItem>
                );
              })}
              {roles.map((i:any) => {
                return (
                  <SelectItem key={i.id} value={i.main_name}>
                    <div className="flex items-start gap-3 text-muted-foreground">
                      <User2 className="size-5" />
                      <div className="grid gap-0.5">
                        <p>
                          {i.main_name}{" "}
                          <span className="font-medium text-foreground">
                            {i.company_name}
                          </span>
                        </p>
                        <p className="text-xs" data-description>
                          {(i.ctc/100000).toFixed(2)}L CTC
                        </p>
                      </div>
                    </div>
                  </SelectItem>
                );
              })}
            </SelectContent>
          </Select>
        </div>
        {convertTo2DArray(Fields).map((i,j) => {
          return (
            <div key={j}>
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-3">
                  <Label htmlFor={i[0].id}>{i[0].name}</Label>
                  <Input
                    value={data[i[0]?.id]}
                    onChange={handleFieldChange}
                    id={i[0].id}
                    type={i[0].type}
                    placeholder={"" + i[0].placeholder}
                  />
                </div>
                {i[1] != undefined && (
                  <div className="grid gap-3">
                    <Label htmlFor={i[1].id}>{i[1].name}</Label>
                    <Input
                      value={data[i[1].id]}
                      onChange={handleFieldChange}
                      id={i[1].id}
                      type={i[1].type}
                      placeholder={"" + i[1].placeholder}
                    />
                  </div>
                )}
                {i[2] != undefined && (
                  <div className="grid gap-3 col-span-2">
                    <Label htmlFor={i[2].id}>{i[2].name}</Label>
                    <Input
                      value={data[i[2].id]}
                      onChange={handleFieldChange}
                      id={i[2].id}
                      type={i[2].type}
                      placeholder={"" + i[2].placeholder}
                    />
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </fieldset>
    </form>
  );
}
