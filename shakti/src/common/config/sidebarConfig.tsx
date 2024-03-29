import React from "react";

export interface TabItemsProps {
    label?: string;
    key: string;
    path?: string;
}

const dashboardTab: TabItemsProps = {
    label: "Dashboard",
    key: "dashboard",
    path: "/",
};

const booksTab: TabItemsProps = {
    label: "Books",
    key: "books",
    path: "/books",
};

const studentsTab: TabItemsProps = {
    label: "Students",
    key: "students",
    path: "/students",
};

const issuesTab: TabItemsProps = {
    label: "Issue",
    key: "issue",
    path: "/issue",
}

const returnTab: TabItemsProps = {
    label: "Return",
    key: "return",
    path: "/return",
}

export const pathTabMap: Map<string, TabItemsProps> = new Map([
    ["/", dashboardTab],
    ["/books", booksTab],
    ["/students", studentsTab],
    ["/issue", issuesTab],
    ["/return", returnTab],
]);

export const keyTabMap: Map<string, TabItemsProps> = new Map([
    ["dashboard", dashboardTab],
    ["books", booksTab],
    ["students", studentsTab],
    ["issue", issuesTab],
    ["return", returnTab],
]);