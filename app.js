const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  React.createElement('div', null,
    React.createElement('h1', null, 'Добро пожаловать в Instrhub!'),
    React.createElement('img', { src: 'assets/example.png', width: 300 })
  )
);
