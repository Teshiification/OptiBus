'use client';
import React, { useEffect, useState } from 'react';
import {
  BarChart,
  Bar,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts'; // Correct import statement

import {
  Bus,
  Driver,
  Employee,
  getBuses,
  getDrivers,
  getEmployees,
  getUsers,
  User
} from '@/lib';
import { Card, CardContent, CardHeader } from '@/components';

const AdminDashboardPage = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [buses, setBuses] = useState<Bus[]>([]);
  const [drivers, setDrivers] = useState<Driver[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const usersData: User[] | false = await getUsers();
        usersData && setUsers(usersData);
      } catch (error) {
        console.error('Error fetching users:', error);
      }

      try {
        const employeesData: Employee[] | false = await getEmployees();
        employeesData && setEmployees(employeesData);
      } catch (error) {
        console.error('Error fetching employees:', error);
      }

      try {
        const driverData: Driver[] | false = await getDrivers();
        driverData && setDrivers(driverData);
      } catch (error) {
        console.error('Error fetching drivers:', error);
      }

      try {
        const busData: Bus[] | false = await getBuses();
        busData && setBuses(busData);
      } catch (error) {
        console.error('Error fetching buses:', error);
      }
    };

    fetchData();
  }, []);

  const dataPersons = [
    {
      name: 'Type',
      users: users.length,
      employees: employees.length - drivers.length,
      drivers: drivers.length
    }
  ];
  const dataBuses = [
    {
      name: 'Bus',
      available: buses.filter((bus) => bus.is_available).length || 0,
      inUse: buses.filter((bus) => !bus.is_available).length || 0
    }
  ];
  const COLORS = ['#8884d8', '#82ca9d', '#ffc658'];

  return (
    <Card className="flex flex-col p-4">
      <CardHeader className="text-2xl font-bold tracking-tight underline decoration-primary decoration-4 underline-offset-4">
        {'Dashboard'}
      </CardHeader>
      <CardContent>
        <div className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
          <div className="flex max-w-[980px] flex-row justify-center gap-2">
            <a
              href="/admin/guide"
              className="rounded-lg bg-card border border-primary hover:bg-primary/30 hover:text-white transition-all duration-300 ease-in-out cursor-help w-40 h-fit p-2 align-middle text-center"
            >
              Need some help? Read our guide!
            </a>
            <ResponsiveContainer width="33%" height={200}>
              <BarChart
                data={dataPersons || []}
                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="users" stackId={0} fill={COLORS[0]} />
              </BarChart>
            </ResponsiveContainer>
            <ResponsiveContainer width="33%" height={200}>
              <BarChart
                data={dataPersons || []}
                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="employees" stackId={1} fill={COLORS[1]} />
                <Bar dataKey="drivers" stackId={1} fill={COLORS[2]} />
              </BarChart>
            </ResponsiveContainer>
            <ResponsiveContainer width="33%" height={200}>
              <BarChart
                data={dataBuses || []}
                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="available" fill={COLORS[0]} />
                <Bar dataKey="inUse" fill={COLORS[2]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default AdminDashboardPage;
