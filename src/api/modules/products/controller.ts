import { getAllProducts, getOneProduct, createProduct, updateProduct, deleteProduct } from '@api/dao';
import { Register } from '@api/core/decorators';

import { listProductsSchema, deleteProductSchema } from './schema';

export class ProductController {

	constructor() { }

	@Register({
		method: 'GET',
		schema: listProductsSchema
	})
	async getProductList(req, res) {
		req.log.info('list products from db');
		const products = await getAllProducts();
		res.send(products);
	}

	@Register({
		method: 'GET',
		path: '/:_id'
	})
	async getProduct(req, res) {
		req.log.info('get one products from db');
		const id = req.params._id;
		const products = await getOneProduct(id);
		res.status(200).send(products);
	}

	@Register({
		method: 'POST',
	})
	async createProduct(req, res) {
		req.log.info('Add products to db');
		const products = await createProduct(req.body);
		res.status(201).send(products);
	}

	@Register({
		method: 'PUT',
		path: '/:_id'
	})
	async updateProduct(req, res) {
		req.log.info('Update product to db');
		const id = req.params._id;
		const products = await updateProduct(id, req.body);
		res.status(200).send(products);
	}

	@Register({
		method: 'DELETE',
		path: '/:_id',
		schema: deleteProductSchema
	})
	async deleteProduct(req, res) {
		req.log.info(`delete product ${req.params._id} from db`);
		const id = req.params.id;
		await deleteProduct(id);
		res.code(200).send('OK');
	}

}
