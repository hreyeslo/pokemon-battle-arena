import { getAllProducts, getOneProduct, createProduct, updateProduct, deleteProduct } from '@api/dao';
import { Controller, Method } from '@api/core/decorators';
import { Signale } from 'signale';

import { listProductsSchema, deleteProductSchema } from './schema';

@Controller()
export class ProductController {

	private _logger: Signale;

	@Method({
		type: 'GET',
		schema: listProductsSchema
	})
	async getProductList(req, res) {
		req.log.info('list products from db');
		const products = await getAllProducts();
		res.send(products);
	}

	@Method({
		type: 'GET',
		path: '/:_id'
	})
	async getProduct(req, res) {
		req.log.info('get one products from db');
		const id = req.params._id;
		const products = await getOneProduct(id);
		res.status(200).send(products);
	}

	@Method({
		type: 'POST',
	})
	async createProduct(req, res) {
		req.log.info('Add products to db');
		const products = await createProduct(req.body);
		res.status(201).send(products);
	}

	@Method({
		type: 'PUT',
		path: '/:_id'
	})
	async updateProduct(req, res) {
		req.log.info('Update product to db');
		const id = req.params._id;
		const products = await updateProduct(id, req.body);
		res.status(200).send(products);
	}

	@Method({
		type: 'DELETE',
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
