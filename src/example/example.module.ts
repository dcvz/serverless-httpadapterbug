import { Module } from '@nestjs/common';
import { HttpAdapterHost } from '@nestjs/core';

@Module({})
export class ExampleModule {
  // @ts-expect-error we don't use the httpAdapterHost
  constructor(private readonly httpAdapterHost: HttpAdapterHost);
}
