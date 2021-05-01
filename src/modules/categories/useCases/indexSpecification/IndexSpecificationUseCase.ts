import { inject, injectable } from 'tsyringe';
import { Specification } from '@modules/cars/infra/typeorm/entities/Specification';

import { SpecificationsRepository } from '@modules/cars/repositories/implementations/SpecificationsRepository';

@injectable()
class IndexSpecificationUseCase {

  constructor(
    @inject("SpecificationsRepository")
    private specificationsRepository: SpecificationsRepository
  ){}

  public async execute(): Promise<Specification[] | undefined > {

    const specification = await this.specificationsRepository.index();

    return specification;

  }

}

export { IndexSpecificationUseCase };