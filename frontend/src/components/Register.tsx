import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  Card,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

const Register = () => {
  return (
    <Card className="mx-auto max-w-sm">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl font-bold">Register</CardTitle>
        <CardDescription>
          Enter an email and password to register for an account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              placeholder="m@example.com"
              required
              type="email"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" required type="password" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password2">Confirm password</Label>
            <Input id="password2" required type="password" />
          </div>
          <Button className="w-full" type="submit">
            Register
          </Button>
        </div>
        <div className="text-center mt-3">
          <p className="text-grey-dark text-sm">
            Already have an account?{" "}
            <a className="no-underline text-blue font-bold" href="#">
              <Link href="/login">Login</Link> <br />
            </a>
            .
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default Register;
