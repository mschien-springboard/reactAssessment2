### Conceptual Exercise

Answer the following questions below:

- What is the purpose of the React Router?

  Let's you use client side routing for the purpose of building a single page application. essentailly lets browser load one html file and serve it on routes as if it was making different html requests on each route.

- What is a single page application?
  Application that re-renders content from various user input without getting new html from the server, allows you to serve content without refreshing the page.

- What are some differences between client side and server side routing?
  server side routing relies on http requests and returning html that would refresh the page. client side routing will often serve the html once and not reload following user input.

- What are two ways of handling redirects with React Router? When would you use each?
React redirect and useHistory hook. redirect is a simple redirect to a given route, it will rerender that route without a refresh. using the browser history is useful when you want back and forward functions to work correctly.

- What are two different ways to handle page-not-found user experiences using React Router? 
Using a router and having a redirect statement at the end of a switch. or having a 404 component at the end of a switch.

- How do you grab URL parameters from within a component using React Router?
useParams hook.

- What is context in React? When would you use it?
allows you to essentially create global props, can be useful when you have very nested child components, making it difficult to pass down props many levels. you have to create the context object and have a provider that components can subscribe to get the context.

- Describe some differences between class-based components and function
  components in React.
class based components extend the generic react component class, they have lifecycle methods that are similar to useEffect used in functional components, but are split into three parts, componentDidMount,componentDidUpdate, and `componentWillUnmount. functional components use a slightly different syntax and are stateful and can use hooks, then are generally cleaner and easier to write.

- What are some of the problems that hooks were designed to solve?
when managing state there can be a lot of reused code, custom hooks allow generic code that can be used across components.