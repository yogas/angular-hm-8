import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  appStatus = new Promise(resolve => setTimeout(() => resolve('stable'), 2000))
  filteredStatus = '';

  servers = [
    {
      instanceType: 'medium',
      name: 'Production Server',
      status: 'stable',
      started: new Date('2017-01-15')
    },
    {
      instanceType: 'large',
      name: 'User Database',
      status: 'stable',
      started: new Date('2017-01-15')
    },
    {
      instanceType: 'small',
      name: 'Development Server',
      status: 'offline',
      started: new Date('2017-01-15')
    },
    {
      instanceType: 'small',
      name: 'Testing Environment Server',
      status: 'stable',
      started: new Date('2017-01-15')
    }
  ];
  getStatusClasses(server: {instanceType: string, name: string, status: string, started: Date}) {
    return {
      'list-group-item-success': server.status === 'stable',
      'list-group-item-warning': server.status === 'offline',
      'list-group-item-danger': server.status === 'critical'
    };
  }
  addServer (): void {
    this.servers.push({
      instanceType: 'medium',
      name: 'new Server',
      status: 'stable',
      started: new Date()
    })
  }
}
