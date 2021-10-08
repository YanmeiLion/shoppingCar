import dva from 'dva';
import './index.css';
import { createBrowserHistory as createHistory } from 'history'
import productsModel from './models/products'

// 1. 初始化dva对象
const app = dva({
    history: createHistory()
});

// 2. Plugins
// app.use({});

// 3. Model
app.model(productsModel);

// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');
