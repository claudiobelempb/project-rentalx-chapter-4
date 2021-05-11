import {
  MigrationInterface,
  QueryRunner,
  TableColumn,
  TableForeignKey,
} from "typeorm";

/* 
    COMANDO: 
    yarn typeorm migrations:create -n AddCarForeignKeyStatusId 
    await queryRunner.query(`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`);
*/

export class AddCarForeignKeyStatusId1620666917140
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      "cars",
      new TableColumn({
        name: "status_id",
        type: "uuid",
        isNullable: true,
      }),
    );

    await queryRunner.createForeignKey(
      "cars",
      new TableForeignKey({
        name: "FKStatusCar",
        referencedTableName: "status",
        referencedColumnNames: ["id"],
        columnNames: ["status_id"],
        onDelete: "SET NULL",
        onUpdate: "SET NULL",
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey("cars", "FKStatusCar");
    await queryRunner.dropColumn("cars", "status_id");
  }
}
