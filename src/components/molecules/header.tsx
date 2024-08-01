"use client";
import { CopyIcon, Download, Save, Share } from "lucide-react";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { DialogDescription } from "@radix-ui/react-dialog";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { toast } from "sonner";
import { useState } from "react";

export default function Header({ children, data, ctc, setSavedRoles }: any) {
  const ShareContent = () => {
    return (
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Share link</DialogTitle>
          <DialogDescription>
            Anyone who has this link will be able to view this.
          </DialogDescription>
        </DialogHeader>
        <div className="flex items-center space-x-2">
          <div className="grid flex-1 gap-2">
            <Label htmlFor="link" className="sr-only">
              Link
            </Label>
            <Input
              id="link"
              defaultValue="https://salaryscope.hrushispace.com"
              readOnly
            />
          </div>
          <Button
            onClick={() => {
              navigator.clipboard
                .writeText("https://salaryscope.hrushispace.com")
                .then(
                  function () {
                    toast("Copied to clipboard successfully :)", {
                      duration: 1000,
                    });
                  },
                  function (err) {
                    console.error("Async: Could not copy text: ", err);
                  }
                );
            }}
            type="submit"
            size="sm"
            className="px-3"
          >
            <span className="sr-only">Copy</span>
            <CopyIcon className="h-4 w-4" />
          </Button>
        </div>
        <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Close
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    );
  };

  const SaveContent = () => {
    const [name, setName] = useState<string>("");
    const [company, setCompany] = useState<string>("");
    const handleSave = () => {
      const obj = {
        id: Math.random() * 100000,
        main_name: name,
        company_name: company,
        ctc: ctc,
        data: data,
      };
      const localStorageData = localStorage.getItem("roles");
      const json = localStorageData ? JSON.parse(localStorageData) : [];
      json.push(obj);
      localStorage.setItem("roles", JSON.stringify(json));
      toast("Saved successfully :)", {
        duration: 1000,
      });
      setSavedRoles(true);
    };
    return (
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Save</DialogTitle>
          <DialogDescription>
            Save your work to access it later.
          </DialogDescription>
        </DialogHeader>
        <DialogDescription>
          <div className="grid flex-1 gap-2">
            <Label htmlFor="name" className="sr-only">
              Role Name
            </Label>
            <Input
              id="name"
              onChange={(e) => setName(e.target.value)}
              placeholder="Role Name"
            />
          </div>
          <div className="grid mt-3 flex-1 gap-2">
            <Label htmlFor="name" className="sr-only">
              Company Name
            </Label>
            <Input
              id="name"
              onChange={(e) => setCompany(e.target.value)}
              placeholder="Company Name"
            />
          </div>
        </DialogDescription>
        <DialogFooter className="justify-between">
          <DialogClose asChild>
            <Button type="button" variant="outline">
              Cancel
            </Button>
          </DialogClose>
          <DialogClose asChild>
            <Button onClick={handleSave} type="button" variant="secondary">
              Okay
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    );
  };
  return (
    <header className="sticky top-0 z-10 flex h-[53px] items-center gap-1 border-b bg-background px-4">
      <h1 className="text-xl font-semibold">SalaryScope</h1>
      {children}
      <Dialog>
        <DialogTrigger asChild>
          <Button
            variant="outline"
            size="sm"
            className="ml-auto gap-1.5 text-sm"
          >
            <Save className="size-3.5" />
            Save
          </Button>
        </DialogTrigger>
        <SaveContent />
      </Dialog>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline" size="sm" className="ml-4 gap-1.5 text-sm">
            <Share className="size-3.5" />
            Share
          </Button>
        </DialogTrigger>
        <ShareContent />
      </Dialog>
    </header>
  );
}
