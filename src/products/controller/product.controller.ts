import { Controller, Get, Post, Patch, Delete } from "@nestjs/common"
import { ProductService } from "../service/product.service"

@Controller()
export class ProductController{

    constructor(productService: ProductService){}

    @Post()
    create(): string{
        return "essa ação cria um produto"
    }

    @Get()
    findAll(): string{
        return "essa ação retorna todos os produtos"
    }

    @Get()
    findById(): string{
        return "essa ação retorna um produto ou nenhum"
    }

    @Patch()
    updateById(): string{
        return "aaa"
    }

    @Delete()
    deleteById(): string{
        return "aaa"
    }
}