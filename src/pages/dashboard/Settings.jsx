import { LuImagePlus, LuSave } from "react-icons/lu";
import Avatar from "../../components/ui/Avatar";
import Button from "../../components/ui/Button";
import Card from "../../components/ui/Card";
import DashboardPageLayout from "../../features/dashboard/DashboardPageLayout";
import Input from "../../components/ui/Input";
import Switch from "../../components/ui/Switch";
import Select from "../../components/ui/Select";
import Form from "../../components/forms/Form";

export default function SettingsPage() {
  return (
    <DashboardPageLayout>
      <Form className="flex flex-col space-y-6">
        <Card className="flex flex-col items-center justify-center gap-3 md:flex-row md:justify-start">
          <Avatar size="large" />

          <h2 className="font-semibold text-white md:text-xl">John Doe</h2>

          <Button
            variant="outline"
            size="small"
            className="mt-3 md:mt-0 md:ml-4"
          >
            <LuImagePlus size={19} />
            <span>Edit Profile</span>
          </Button>
        </Card>

        <Card className="space-y-1">
          <div className="grid grid-cols-1 gap-x-2 md:grid-cols-2 md:gap-x-4 lg:grid-cols-4 lg:gap-x-5">
            <Input
              type="email"
              label="Email Address"
              size="small"
              placeholder="Email"
              value="amirali.khorasani@example.com"
            />
            <Input
              type="text"
              label="Full Name"
              size="small"
              placeholder="Full Name"
              value="Amirali Khorasani"
            />
            <Input
              type="text"
              label="Phone Number"
              size="small"
              placeholder="Phone Number"
              value="123-456-7890"
            />
            <Input
              type="text"
              label="username"
              size="small"
              placeholder="username"
              value="amirali_khorasani"
            />
          </div>

          <div className="mt-8 grid grid-cols-1 gap-x-2 gap-y-7 md:grid-cols-2 md:gap-x-4 lg:mt-auto lg:grid-cols-4 lg:gap-x-5">
            <Select
              options={[
                { value: "dark-mode", label: "Dark Mode" },
                { value: "light-mode", label: "Light Mode" },
              ]}
              size="small"
            />

            <Switch label="Enable Notifications" size="small" />
          </div>
        </Card>

        <Button type="submit" variant="primary" className="mt-10 w-fit">
          <LuSave size={20} />
          <span>Save Changes</span>
        </Button>
      </Form>
    </DashboardPageLayout>
  );
}
