import { ViewConfig } from '@vaadin/hilla-file-router/types.js';
import { Button, DatePicker, Grid, GridColumn, TextField } from '@vaadin/react-components';
import { Notification } from '@vaadin/react-components/Notification';
import { TaskService } from 'Frontend/generated/endpoints';
import { useSignal } from '@vaadin/hilla-react-signals';
import handleError from 'Frontend/views/_ErrorHandler';
import { Group, ViewToolbar } from 'Frontend/components/ViewToolbar';
import Task from 'Frontend/generated/org/honey/app/taskmanagement/domain/Task';
import { useDataProvider } from '@vaadin/hilla-react-crud';

export const config: ViewConfig = {
  title: 'Honey',
  menu: {
    icon: 'vaadin:check',
    order: 1,
    title: 'Honey',
  },
};

const dateTimeFormatter = new Intl.DateTimeFormat(undefined, {
  dateStyle: 'medium',
  timeStyle: 'medium',
});

const dateFormatter = new Intl.DateTimeFormat(undefined, {
  dateStyle: 'medium',
});

type TaskEntryFormProps = {
  onTaskCreated?: () => void;
};

export default function HoneyTips() {
  return (
      <main className="w-full h-full flex flex-col box-border gap-m p-l bg-gray-50 rounded-lg shadow-md">
        <h1 className="text-xl font-bold text-primary mb-s">Honey Tips</h1>
        <p className="text-m text-gray-700 leading-relaxed">
          Honey is a natural sweetener that has been used for centuries for its health benefits and culinary uses. Here are some tips on how to use honey effectively:
        </p>
        <ul className="list-disc pl-6 text-gray-800 space-y-2">
          <li>Use honey as a natural sweetener in tea, coffee, or smoothies.</li>
          <li>Drizzle honey over yogurt or oatmeal for added flavor and nutrition.</li>
          <li>Use honey as a natural remedy for sore throats and coughs.</li>
          <li>Add honey to marinades or dressings for a touch of sweetness.</li>
          <li>Use honey in baking as a substitute for sugar.</li>
        </ul>
      </main>
  );
}
