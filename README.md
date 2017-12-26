# Ngsample

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
# ngsample

Create Angular 4 client project
Location of the SpringBoot project at: C:\Users\User\workspace\SpringBootAngular4.
Now, open cmd, cd to C:\Users\User\workspace\".
– Start a new angular 4 project by commandline: ng new angular4-client:

angular4 - springboot springtoolsuite - install Angular4-client

To check angular version, go to angular4-client folder, type: ng -v:


 
angular4 - springboot springtoolsuite - install Angular4-client - version

Start angular4-client project by cmd npm start, results:

angular4 - springboot springtoolsuite - start Angular4-client

angular4 - springboot springtoolsuite - Angular4-client - working

5. Import Angular4 client project to SpringToolSuite
Open SpringToolSuite, go to Import -> General -> Projects from Folder or Archieve, press Next:

import angular4 client to springtoolsuite

Press Finish, Angular4 client is imported:

angular4 client project

To clean the sourcecode in STS, we need to remove node_modules by following the steps:
– Right click on angular4-client project, choose Properties, then choose: Resource -> Resource Filter.
– Press Add Filter…, choose Filter Type: Exclude all, Applies to: Files and folders, and check All children (recursive), with File and Folder Atributes, we specify node_modules:

angular4 client - exclude node_modules

Press OK. Then press Apply, result:

angularjs4 client after filter node_modules

-> Now node_modules is already removed from the SpringToolSuite.

It’s ready to modify something with Angular4-client project:
– Open /src/app/app.component.ts, edit:


export class AppComponent {
  title = 'JavasampleApproach HelloWord Angular4 App';
}
1
2
3
export class AppComponent {
  title = 'JavasampleApproach HelloWord Angular4 App';
}
– Open src/app/app.component.css, add:


h1 {
  color: blue;
  font-size: 150%;
}
1
2
3
4
h1 {
  color: blue;
  font-size: 150%;
}
Now, start angular4-client project with STS:
– Go to Window -> Show View -> Other, search and choose Terminal.
– Then launch a Local Terminal, cd to C:\Users\User\workspace\angular4-client. Press command npm start to launch the angular4-client, results:

start angular4 client with STS terminal

angular4 app after some edit

6. Integrate SpringBoot server and Angular 4 client
Up to now, Angular4-Client and SpringBoot server work independently on ports 8080 and 4200.
Goal of below integration: the client at 4200 will proxy any /api requests to the server.

Step to do:
– Create a file proxy.conf.json under project angular4-client folder with content:


{
	"/api": {
		"target": "http://localhost:8080",
		"secure": false
	}
}
1
2
3
4
5
6
{
	"/api": {
		"target": "http://localhost:8080",
		"secure": false
	}
}
– Edit package.json file for “start” script:


...
"scripts": {
    "ng": "ng",
    "start": "ng serve --proxy-config proxy.conf.json",
    "build": "ng build",
    "test": "ng test",
    "lint": "ng lint",
    "e2e": "ng e2e"
},
 ...
1
2
3
4
5
6
7
8
9
10
...
"scripts": {
    "ng": "ng",
    "start": "ng serve --proxy-config proxy.conf.json",
    "build": "ng build",
    "test": "ng test",
    "lint": "ng lint",
    "e2e": "ng e2e"
},
 ...
– Build and run the RestfulService project with SpringBoot App mode at port 8080. And run angular4-client at port 4200.
Make a request http://localhost:4200/api/hi, result:


 
result - angular4 client proxy server

7. Deploy SpringBoot server with Angular4 client
Build angular4 client with command ng build --env=prod:



Result is a dist folder:

build angular4 client - result

We have 2 approaches to deployment Spring Boot server with angular4 client:
– Manually copy all files from dist folder to /src/main/resources/static folder of SpringBoot server project.
– Using Maven plugin to copy all files from dist folder to /src/main/resources/static folder of SpringBoot server project.


<plugin>
<artifactId>maven-resources-plugin</artifactId>
<executions>
      <execution>
          <id>copy-resources</id>
          <phase>validate</phase>
          <goals><goal>copy-resources</goal></goals>
          <configuration>
              <outputDirectory>${basedir}/target/classes/static/</outputDirectory >
              <resources>
                  <resource>
                      <directory>${basedir}/../angular4-client/dist</directory >
                  </resource>
              </resources>
          </configuration>
      </execution>
</executions>
</plugin>
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
<plugin>
<artifactId>maven-resources-plugin</artifactId>
<executions>
      <execution>
          <id>copy-resources</id>
          <phase>validate</phase>
          <goals><goal>copy-resources</goal></goals>
          <configuration>
              <outputDirectory>${basedir}/target/classes/static/</outputDirectory >
              <resources>
                  <resource>
                      <directory>${basedir}/../angular4-client/dist</directory >
                  </resource>
              </resources>
          </configuration>
      </execution>
</executions>
</plugin>
Now build and run the SpringBoot server again with commands:
– Build: mvn clean install
– Run: mvn spring-boot:run

Then make some requests:
– http://localhost:8080/, result:

springboot service - home after deployment with angular4

– http://localhost:8080/api/hi, result:

after deploy angular4 and backend service



http://javasampleapproach.com/java-integration/integrate-angular-4-springboot-web-app-springtoolsuite
