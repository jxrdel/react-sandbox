import { Head } from "@inertiajs/react";

import AppLayout from "@/layouts/app-layout";
import { tasks as tasksRoute } from "@/routes";
import { type BreadcrumbItem, type Task } from "@/types";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Card, CardContent } from "@/components/ui/card";

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Task',
        href: tasksRoute().url,
    },
];

export default function Task({ tasks }: { tasks: Task[] }) {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Task" />
            <div className="flex flex-1 flex-col gap-4 p-4">
                <div className="flex items-center justify-between">
                    <h1 className="text-2xl font-bold tracking-tight">Tasks</h1>
                </div>

                <Card>
                    <CardContent className="p-0">
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Name</TableHead>
                                    <TableHead>Description</TableHead>
                                    <TableHead className="w-[150px]">Created At</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {tasks.length === 0 ? (
                                    <TableRow>
                                        <TableCell colSpan={3} className="h-24 text-center">
                                            No tasks found.
                                        </TableCell>
                                    </TableRow>
                                ) : (
                                    tasks.map((task) => (
                                        <TableRow key={task.id}>
                                            <TableCell className="font-medium">{task.name}</TableCell>
                                            <TableCell className="text-muted-foreground whitespace-pre-wrap">
                                                {task.description || "No description"}
                                            </TableCell>
                                            <TableCell className="text-muted-foreground">
                                                {new Date(task.created_at).toLocaleDateString()}
                                            </TableCell>
                                        </TableRow>
                                    ))
                                )}
                            </TableBody>
                        </Table>
                    </CardContent>
                </Card>
            </div>
        </AppLayout>
    );
}