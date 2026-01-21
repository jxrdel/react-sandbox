import { Head } from "@inertiajs/react";

import AppLayout from "@/layouts/app-layout";
import { tasks } from "@/routes";
import { type BreadcrumbItem } from "@/types";

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Task',
        href: tasks().url,
    },
];

export default function Task() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Task" />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <h1>Task</h1>
            </div>
        </AppLayout>
    );
}