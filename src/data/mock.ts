import { ChartConfig } from "@/components/ui/chart"
import { FieldType } from "@/types/Main"

export const ROLES = [
    {
      id: 1,
      main_name: "Ninja",
      company_name: "TCS",
      ctc: "3.5L",
      data:{
        basic_salary:122400,
        benifits:156000,
        performance:20400,
        bonus:7200,
        health:7900,
        pf:14688,
        gratuity:5887, 
        retirals:28475,
        city:2400,
        food:500,
        travel:850,
        monthsWithBonus:4,
        monthsWithOutBonus:8,
        retentionBonus:0
      }
    },
    {
      id: 2,
      main_name: "Digital",
      company_name: "TCS",
      ctc: "7L",
      data:{
        basic_salary:180000,
        benifits:318264,
        performance:51600,
        bonus:37200,
        health:7900,
        pf:21600,
        gratuity:8658, 
        retirals:38158,
        city:4800,
        food:500,
        travel:1250,
        monthsWithBonus:4,
        monthsWithOutBonus:8,
        retentionBonus:70000
      }
    },
    {
      id: 3,
      main_name: "Prime",
      company_name: "TCS",
      ctc: "9L",
      data:{
        basic_salary:180000,
        benifits:566772,
        performance:67200,
        bonus:48000,
        health:7900,
        pf:21600,
        gratuity:8658, 
        retirals:38158,
        city:4800,
        food:500,
        travel:1250,
        monthsWithBonus:4,
        monthsWithOutBonus:8,
        retentionBonus:0
      }
    }
  ]

export const Fields:FieldType[] = [
    {
      id: "basic_salary",
      name: "Basic Salary",
      type: "number",
      placeholder: 0
    },
    {
      id: "benifits",
      name: "Yearly Benifits",
      type: "number",
      placeholder: 0
    },
    {
      id: "performance",
      name: "Yearly Performance",
      type: "number",
      placeholder: 0
    },
    {
      id: "bonus",
      name: "Yearly Bonus",
      type: "number",
      placeholder: 0
    },
    {
      id: "health",
      name: "Yearly Health",
      type: "number",
      placeholder: 0
    },
    {
      id: "pf",
      name: "Yearly PF",
      type: "number",
      placeholder: 0
    },
    {
      id: "gratuity",
      name: "Yearly Gratuity",
      type: "number",
      placeholder: 0
    },
    {
      id: "retirals",
      name: "Yearly Retirals",
      type: "number",
      placeholder: 0
    },
    {
      id: "city",
      name: "Yearly City",
      type: "number",
      placeholder: 0
    },
    {
      id: "food",
      name: "Yearly Food",
      type: "number",
      placeholder: 0
    },
    {
      id: "travel",
      name: "Yearly Travel",
      type: "number",
      placeholder: 0
    },
    {
      id: "monthsWithBonus",
      name: "Months With Bonus",
      type: "number",
      placeholder: 0
    },
    {
      id: "monthsWithOutBonus",
      name: "Months Without Bonus",
      type: "number",
      placeholder: 0
    },
    {
      id: "retentionBonus",
      name: "Retention Bonus",
      type: "number",
      placeholder: 0
    }
  ]

  export const chartData = [
    { browser: "chrome", visitors: 275, fill: "var(--color-chrome)" },
    { browser: "safari", visitors: 200, fill: "var(--color-safari)" },
    { browser: "firefox", visitors: 287, fill: "var(--color-firefox)" },
    { browser: "edge", visitors: 173, fill: "var(--color-edge)" },
    { browser: "other", visitors: 190, fill: "var(--color-other)" },
  ]
  export const chartConfig = {
    visitors: {
      label: "Visitors",
    },
    chrome: {
      label: "Chrome",
      color: "hsl(var(--chart-1))",
    },
    safari: {
      label: "Safari",
      color: "hsl(var(--chart-2))",
    },
    firefox: {
      label: "Firefox",
      color: "hsl(var(--chart-3))",
    },
    edge: {
      label: "Edge",
      color: "hsl(var(--chart-4))",
    },
    other: {
      label: "Other",
      color: "hsl(var(--chart-5))",
    },
  } satisfies ChartConfig