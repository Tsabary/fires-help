import { useEntity, useUser } from "replyke";
import EditTask from "./EditTask";
import ApplyToHelp from "./ApplyToHelp";
import TaskInProgress from "./TaskInProgress";

function TaskAction() {
  const { user } = useUser();
  const { entity: task } = useEntity();

  const requiredVoluneers = task?.metadata.volunteersRequired
    ? task.metadata.volunteersRequired - (task.metadata.volunteersAssigned || 0)
    : null;

  return (
    <div className="rounded-b-md overflow-hidden">
      {user?.id === task?.user?.id ? (
        <EditTask />
      ) : !task?.metadata.isCompleted &&
        (requiredVoluneers === null || requiredVoluneers > 0) ? (
        <ApplyToHelp />
      ) : (
        <TaskInProgress />
      )}
    </div>
  );
}

export default TaskAction;
