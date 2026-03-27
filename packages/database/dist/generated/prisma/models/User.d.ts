import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model User
 *
 */
export type UserModel = runtime.Types.Result.DefaultSelection<Prisma.$UserPayload>;
export type AggregateUser = {
    _count: UserCountAggregateOutputType | null;
    _avg: UserAvgAggregateOutputType | null;
    _sum: UserSumAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
};
export type UserAvgAggregateOutputType = {
    id: number | null;
    createdById: number | null;
    updatedById: number | null;
};
export type UserSumAggregateOutputType = {
    id: number | null;
    createdById: number | null;
    updatedById: number | null;
};
export type UserMinAggregateOutputType = {
    id: number | null;
    email: string | null;
    name: string | null;
    password: string | null;
    role: $Enums.UserRole | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    createdById: number | null;
    updatedById: number | null;
};
export type UserMaxAggregateOutputType = {
    id: number | null;
    email: string | null;
    name: string | null;
    password: string | null;
    role: $Enums.UserRole | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    createdById: number | null;
    updatedById: number | null;
};
export type UserCountAggregateOutputType = {
    id: number;
    email: number;
    name: number;
    password: number;
    role: number;
    createdAt: number;
    updatedAt: number;
    createdById: number;
    updatedById: number;
    _all: number;
};
export type UserAvgAggregateInputType = {
    id?: true;
    createdById?: true;
    updatedById?: true;
};
export type UserSumAggregateInputType = {
    id?: true;
    createdById?: true;
    updatedById?: true;
};
export type UserMinAggregateInputType = {
    id?: true;
    email?: true;
    name?: true;
    password?: true;
    role?: true;
    createdAt?: true;
    updatedAt?: true;
    createdById?: true;
    updatedById?: true;
};
export type UserMaxAggregateInputType = {
    id?: true;
    email?: true;
    name?: true;
    password?: true;
    role?: true;
    createdAt?: true;
    updatedAt?: true;
    createdById?: true;
    updatedById?: true;
};
export type UserCountAggregateInputType = {
    id?: true;
    email?: true;
    name?: true;
    password?: true;
    role?: true;
    createdAt?: true;
    updatedAt?: true;
    createdById?: true;
    updatedById?: true;
    _all?: true;
};
export type UserAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: Prisma.UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: Prisma.UserOrderByWithRelationInput | Prisma.UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType;
};
export type GetUserAggregateType<T extends UserAggregateArgs> = {
    [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateUser[P]> : Prisma.GetScalarType<T[P], AggregateUser[P]>;
};
export type UserGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithAggregationInput | Prisma.UserOrderByWithAggregationInput[];
    by: Prisma.UserScalarFieldEnum[] | Prisma.UserScalarFieldEnum;
    having?: Prisma.UserScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UserCountAggregateInputType | true;
    _avg?: UserAvgAggregateInputType;
    _sum?: UserSumAggregateInputType;
    _min?: UserMinAggregateInputType;
    _max?: UserMaxAggregateInputType;
};
export type UserGroupByOutputType = {
    id: number;
    email: string;
    name: string | null;
    password: string;
    role: $Enums.UserRole;
    createdAt: Date;
    updatedAt: Date;
    createdById: number | null;
    updatedById: number | null;
    _count: UserCountAggregateOutputType | null;
    _avg: UserAvgAggregateOutputType | null;
    _sum: UserSumAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
};
type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<UserGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], UserGroupByOutputType[P]> : Prisma.GetScalarType<T[P], UserGroupByOutputType[P]>;
}>>;
export type UserWhereInput = {
    AND?: Prisma.UserWhereInput | Prisma.UserWhereInput[];
    OR?: Prisma.UserWhereInput[];
    NOT?: Prisma.UserWhereInput | Prisma.UserWhereInput[];
    id?: Prisma.IntFilter<"User"> | number;
    email?: Prisma.StringFilter<"User"> | string;
    name?: Prisma.StringNullableFilter<"User"> | string | null;
    password?: Prisma.StringFilter<"User"> | string;
    role?: Prisma.EnumUserRoleFilter<"User"> | $Enums.UserRole;
    createdAt?: Prisma.DateTimeFilter<"User"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"User"> | Date | string;
    createdById?: Prisma.IntNullableFilter<"User"> | number | null;
    updatedById?: Prisma.IntNullableFilter<"User"> | number | null;
    createdBy?: Prisma.XOR<Prisma.UserNullableScalarRelationFilter, Prisma.UserWhereInput> | null;
    updatedBy?: Prisma.XOR<Prisma.UserNullableScalarRelationFilter, Prisma.UserWhereInput> | null;
    usersICreated?: Prisma.UserListRelationFilter;
    usersIUpdated?: Prisma.UserListRelationFilter;
    gamesCreated?: Prisma.GameListRelationFilter;
    gamesUpdated?: Prisma.GameListRelationFilter;
    videosCreated?: Prisma.VideoListRelationFilter;
    videosUpdated?: Prisma.VideoListRelationFilter;
};
export type UserOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    name?: Prisma.SortOrderInput | Prisma.SortOrder;
    password?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    createdById?: Prisma.SortOrderInput | Prisma.SortOrder;
    updatedById?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdBy?: Prisma.UserOrderByWithRelationInput;
    updatedBy?: Prisma.UserOrderByWithRelationInput;
    usersICreated?: Prisma.UserOrderByRelationAggregateInput;
    usersIUpdated?: Prisma.UserOrderByRelationAggregateInput;
    gamesCreated?: Prisma.GameOrderByRelationAggregateInput;
    gamesUpdated?: Prisma.GameOrderByRelationAggregateInput;
    videosCreated?: Prisma.VideoOrderByRelationAggregateInput;
    videosUpdated?: Prisma.VideoOrderByRelationAggregateInput;
};
export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    email?: string;
    AND?: Prisma.UserWhereInput | Prisma.UserWhereInput[];
    OR?: Prisma.UserWhereInput[];
    NOT?: Prisma.UserWhereInput | Prisma.UserWhereInput[];
    name?: Prisma.StringNullableFilter<"User"> | string | null;
    password?: Prisma.StringFilter<"User"> | string;
    role?: Prisma.EnumUserRoleFilter<"User"> | $Enums.UserRole;
    createdAt?: Prisma.DateTimeFilter<"User"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"User"> | Date | string;
    createdById?: Prisma.IntNullableFilter<"User"> | number | null;
    updatedById?: Prisma.IntNullableFilter<"User"> | number | null;
    createdBy?: Prisma.XOR<Prisma.UserNullableScalarRelationFilter, Prisma.UserWhereInput> | null;
    updatedBy?: Prisma.XOR<Prisma.UserNullableScalarRelationFilter, Prisma.UserWhereInput> | null;
    usersICreated?: Prisma.UserListRelationFilter;
    usersIUpdated?: Prisma.UserListRelationFilter;
    gamesCreated?: Prisma.GameListRelationFilter;
    gamesUpdated?: Prisma.GameListRelationFilter;
    videosCreated?: Prisma.VideoListRelationFilter;
    videosUpdated?: Prisma.VideoListRelationFilter;
}, "id" | "email">;
export type UserOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    name?: Prisma.SortOrderInput | Prisma.SortOrder;
    password?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    createdById?: Prisma.SortOrderInput | Prisma.SortOrder;
    updatedById?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.UserCountOrderByAggregateInput;
    _avg?: Prisma.UserAvgOrderByAggregateInput;
    _max?: Prisma.UserMaxOrderByAggregateInput;
    _min?: Prisma.UserMinOrderByAggregateInput;
    _sum?: Prisma.UserSumOrderByAggregateInput;
};
export type UserScalarWhereWithAggregatesInput = {
    AND?: Prisma.UserScalarWhereWithAggregatesInput | Prisma.UserScalarWhereWithAggregatesInput[];
    OR?: Prisma.UserScalarWhereWithAggregatesInput[];
    NOT?: Prisma.UserScalarWhereWithAggregatesInput | Prisma.UserScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"User"> | number;
    email?: Prisma.StringWithAggregatesFilter<"User"> | string;
    name?: Prisma.StringNullableWithAggregatesFilter<"User"> | string | null;
    password?: Prisma.StringWithAggregatesFilter<"User"> | string;
    role?: Prisma.EnumUserRoleWithAggregatesFilter<"User"> | $Enums.UserRole;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"User"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"User"> | Date | string;
    createdById?: Prisma.IntNullableWithAggregatesFilter<"User"> | number | null;
    updatedById?: Prisma.IntNullableWithAggregatesFilter<"User"> | number | null;
};
export type UserCreateInput = {
    email: string;
    name?: string | null;
    password: string;
    role?: $Enums.UserRole;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    createdBy?: Prisma.UserCreateNestedOneWithoutUsersICreatedInput;
    updatedBy?: Prisma.UserCreateNestedOneWithoutUsersIUpdatedInput;
    usersICreated?: Prisma.UserCreateNestedManyWithoutCreatedByInput;
    usersIUpdated?: Prisma.UserCreateNestedManyWithoutUpdatedByInput;
    gamesCreated?: Prisma.GameCreateNestedManyWithoutCreatedByInput;
    gamesUpdated?: Prisma.GameCreateNestedManyWithoutUpdatedByInput;
    videosCreated?: Prisma.VideoCreateNestedManyWithoutCreatedByInput;
    videosUpdated?: Prisma.VideoCreateNestedManyWithoutUpdatedByInput;
};
export type UserUncheckedCreateInput = {
    id?: number;
    email: string;
    name?: string | null;
    password: string;
    role?: $Enums.UserRole;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    createdById?: number | null;
    updatedById?: number | null;
    usersICreated?: Prisma.UserUncheckedCreateNestedManyWithoutCreatedByInput;
    usersIUpdated?: Prisma.UserUncheckedCreateNestedManyWithoutUpdatedByInput;
    gamesCreated?: Prisma.GameUncheckedCreateNestedManyWithoutCreatedByInput;
    gamesUpdated?: Prisma.GameUncheckedCreateNestedManyWithoutUpdatedByInput;
    videosCreated?: Prisma.VideoUncheckedCreateNestedManyWithoutCreatedByInput;
    videosUpdated?: Prisma.VideoUncheckedCreateNestedManyWithoutUpdatedByInput;
};
export type UserUpdateInput = {
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdBy?: Prisma.UserUpdateOneWithoutUsersICreatedNestedInput;
    updatedBy?: Prisma.UserUpdateOneWithoutUsersIUpdatedNestedInput;
    usersICreated?: Prisma.UserUpdateManyWithoutCreatedByNestedInput;
    usersIUpdated?: Prisma.UserUpdateManyWithoutUpdatedByNestedInput;
    gamesCreated?: Prisma.GameUpdateManyWithoutCreatedByNestedInput;
    gamesUpdated?: Prisma.GameUpdateManyWithoutUpdatedByNestedInput;
    videosCreated?: Prisma.VideoUpdateManyWithoutCreatedByNestedInput;
    videosUpdated?: Prisma.VideoUpdateManyWithoutUpdatedByNestedInput;
};
export type UserUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdById?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    updatedById?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    usersICreated?: Prisma.UserUncheckedUpdateManyWithoutCreatedByNestedInput;
    usersIUpdated?: Prisma.UserUncheckedUpdateManyWithoutUpdatedByNestedInput;
    gamesCreated?: Prisma.GameUncheckedUpdateManyWithoutCreatedByNestedInput;
    gamesUpdated?: Prisma.GameUncheckedUpdateManyWithoutUpdatedByNestedInput;
    videosCreated?: Prisma.VideoUncheckedUpdateManyWithoutCreatedByNestedInput;
    videosUpdated?: Prisma.VideoUncheckedUpdateManyWithoutUpdatedByNestedInput;
};
export type UserCreateManyInput = {
    id?: number;
    email: string;
    name?: string | null;
    password: string;
    role?: $Enums.UserRole;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    createdById?: number | null;
    updatedById?: number | null;
};
export type UserUpdateManyMutationInput = {
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type UserUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdById?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    updatedById?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
};
export type UserNullableScalarRelationFilter = {
    is?: Prisma.UserWhereInput | null;
    isNot?: Prisma.UserWhereInput | null;
};
export type UserListRelationFilter = {
    every?: Prisma.UserWhereInput;
    some?: Prisma.UserWhereInput;
    none?: Prisma.UserWhereInput;
};
export type UserOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type UserCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    password?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    createdById?: Prisma.SortOrder;
    updatedById?: Prisma.SortOrder;
};
export type UserAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    createdById?: Prisma.SortOrder;
    updatedById?: Prisma.SortOrder;
};
export type UserMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    password?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    createdById?: Prisma.SortOrder;
    updatedById?: Prisma.SortOrder;
};
export type UserMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    password?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    createdById?: Prisma.SortOrder;
    updatedById?: Prisma.SortOrder;
};
export type UserSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    createdById?: Prisma.SortOrder;
    updatedById?: Prisma.SortOrder;
};
export type UserCreateNestedOneWithoutUsersICreatedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutUsersICreatedInput, Prisma.UserUncheckedCreateWithoutUsersICreatedInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutUsersICreatedInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserCreateNestedOneWithoutUsersIUpdatedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutUsersIUpdatedInput, Prisma.UserUncheckedCreateWithoutUsersIUpdatedInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutUsersIUpdatedInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserCreateNestedManyWithoutCreatedByInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutCreatedByInput, Prisma.UserUncheckedCreateWithoutCreatedByInput> | Prisma.UserCreateWithoutCreatedByInput[] | Prisma.UserUncheckedCreateWithoutCreatedByInput[];
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutCreatedByInput | Prisma.UserCreateOrConnectWithoutCreatedByInput[];
    createMany?: Prisma.UserCreateManyCreatedByInputEnvelope;
    connect?: Prisma.UserWhereUniqueInput | Prisma.UserWhereUniqueInput[];
};
export type UserCreateNestedManyWithoutUpdatedByInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutUpdatedByInput, Prisma.UserUncheckedCreateWithoutUpdatedByInput> | Prisma.UserCreateWithoutUpdatedByInput[] | Prisma.UserUncheckedCreateWithoutUpdatedByInput[];
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutUpdatedByInput | Prisma.UserCreateOrConnectWithoutUpdatedByInput[];
    createMany?: Prisma.UserCreateManyUpdatedByInputEnvelope;
    connect?: Prisma.UserWhereUniqueInput | Prisma.UserWhereUniqueInput[];
};
export type UserUncheckedCreateNestedManyWithoutCreatedByInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutCreatedByInput, Prisma.UserUncheckedCreateWithoutCreatedByInput> | Prisma.UserCreateWithoutCreatedByInput[] | Prisma.UserUncheckedCreateWithoutCreatedByInput[];
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutCreatedByInput | Prisma.UserCreateOrConnectWithoutCreatedByInput[];
    createMany?: Prisma.UserCreateManyCreatedByInputEnvelope;
    connect?: Prisma.UserWhereUniqueInput | Prisma.UserWhereUniqueInput[];
};
export type UserUncheckedCreateNestedManyWithoutUpdatedByInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutUpdatedByInput, Prisma.UserUncheckedCreateWithoutUpdatedByInput> | Prisma.UserCreateWithoutUpdatedByInput[] | Prisma.UserUncheckedCreateWithoutUpdatedByInput[];
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutUpdatedByInput | Prisma.UserCreateOrConnectWithoutUpdatedByInput[];
    createMany?: Prisma.UserCreateManyUpdatedByInputEnvelope;
    connect?: Prisma.UserWhereUniqueInput | Prisma.UserWhereUniqueInput[];
};
export type StringFieldUpdateOperationsInput = {
    set?: string;
};
export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
};
export type EnumUserRoleFieldUpdateOperationsInput = {
    set?: $Enums.UserRole;
};
export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
};
export type UserUpdateOneWithoutUsersICreatedNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutUsersICreatedInput, Prisma.UserUncheckedCreateWithoutUsersICreatedInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutUsersICreatedInput;
    upsert?: Prisma.UserUpsertWithoutUsersICreatedInput;
    disconnect?: Prisma.UserWhereInput | boolean;
    delete?: Prisma.UserWhereInput | boolean;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutUsersICreatedInput, Prisma.UserUpdateWithoutUsersICreatedInput>, Prisma.UserUncheckedUpdateWithoutUsersICreatedInput>;
};
export type UserUpdateOneWithoutUsersIUpdatedNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutUsersIUpdatedInput, Prisma.UserUncheckedCreateWithoutUsersIUpdatedInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutUsersIUpdatedInput;
    upsert?: Prisma.UserUpsertWithoutUsersIUpdatedInput;
    disconnect?: Prisma.UserWhereInput | boolean;
    delete?: Prisma.UserWhereInput | boolean;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutUsersIUpdatedInput, Prisma.UserUpdateWithoutUsersIUpdatedInput>, Prisma.UserUncheckedUpdateWithoutUsersIUpdatedInput>;
};
export type UserUpdateManyWithoutCreatedByNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutCreatedByInput, Prisma.UserUncheckedCreateWithoutCreatedByInput> | Prisma.UserCreateWithoutCreatedByInput[] | Prisma.UserUncheckedCreateWithoutCreatedByInput[];
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutCreatedByInput | Prisma.UserCreateOrConnectWithoutCreatedByInput[];
    upsert?: Prisma.UserUpsertWithWhereUniqueWithoutCreatedByInput | Prisma.UserUpsertWithWhereUniqueWithoutCreatedByInput[];
    createMany?: Prisma.UserCreateManyCreatedByInputEnvelope;
    set?: Prisma.UserWhereUniqueInput | Prisma.UserWhereUniqueInput[];
    disconnect?: Prisma.UserWhereUniqueInput | Prisma.UserWhereUniqueInput[];
    delete?: Prisma.UserWhereUniqueInput | Prisma.UserWhereUniqueInput[];
    connect?: Prisma.UserWhereUniqueInput | Prisma.UserWhereUniqueInput[];
    update?: Prisma.UserUpdateWithWhereUniqueWithoutCreatedByInput | Prisma.UserUpdateWithWhereUniqueWithoutCreatedByInput[];
    updateMany?: Prisma.UserUpdateManyWithWhereWithoutCreatedByInput | Prisma.UserUpdateManyWithWhereWithoutCreatedByInput[];
    deleteMany?: Prisma.UserScalarWhereInput | Prisma.UserScalarWhereInput[];
};
export type UserUpdateManyWithoutUpdatedByNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutUpdatedByInput, Prisma.UserUncheckedCreateWithoutUpdatedByInput> | Prisma.UserCreateWithoutUpdatedByInput[] | Prisma.UserUncheckedCreateWithoutUpdatedByInput[];
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutUpdatedByInput | Prisma.UserCreateOrConnectWithoutUpdatedByInput[];
    upsert?: Prisma.UserUpsertWithWhereUniqueWithoutUpdatedByInput | Prisma.UserUpsertWithWhereUniqueWithoutUpdatedByInput[];
    createMany?: Prisma.UserCreateManyUpdatedByInputEnvelope;
    set?: Prisma.UserWhereUniqueInput | Prisma.UserWhereUniqueInput[];
    disconnect?: Prisma.UserWhereUniqueInput | Prisma.UserWhereUniqueInput[];
    delete?: Prisma.UserWhereUniqueInput | Prisma.UserWhereUniqueInput[];
    connect?: Prisma.UserWhereUniqueInput | Prisma.UserWhereUniqueInput[];
    update?: Prisma.UserUpdateWithWhereUniqueWithoutUpdatedByInput | Prisma.UserUpdateWithWhereUniqueWithoutUpdatedByInput[];
    updateMany?: Prisma.UserUpdateManyWithWhereWithoutUpdatedByInput | Prisma.UserUpdateManyWithWhereWithoutUpdatedByInput[];
    deleteMany?: Prisma.UserScalarWhereInput | Prisma.UserScalarWhereInput[];
};
export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type UserUncheckedUpdateManyWithoutCreatedByNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutCreatedByInput, Prisma.UserUncheckedCreateWithoutCreatedByInput> | Prisma.UserCreateWithoutCreatedByInput[] | Prisma.UserUncheckedCreateWithoutCreatedByInput[];
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutCreatedByInput | Prisma.UserCreateOrConnectWithoutCreatedByInput[];
    upsert?: Prisma.UserUpsertWithWhereUniqueWithoutCreatedByInput | Prisma.UserUpsertWithWhereUniqueWithoutCreatedByInput[];
    createMany?: Prisma.UserCreateManyCreatedByInputEnvelope;
    set?: Prisma.UserWhereUniqueInput | Prisma.UserWhereUniqueInput[];
    disconnect?: Prisma.UserWhereUniqueInput | Prisma.UserWhereUniqueInput[];
    delete?: Prisma.UserWhereUniqueInput | Prisma.UserWhereUniqueInput[];
    connect?: Prisma.UserWhereUniqueInput | Prisma.UserWhereUniqueInput[];
    update?: Prisma.UserUpdateWithWhereUniqueWithoutCreatedByInput | Prisma.UserUpdateWithWhereUniqueWithoutCreatedByInput[];
    updateMany?: Prisma.UserUpdateManyWithWhereWithoutCreatedByInput | Prisma.UserUpdateManyWithWhereWithoutCreatedByInput[];
    deleteMany?: Prisma.UserScalarWhereInput | Prisma.UserScalarWhereInput[];
};
export type UserUncheckedUpdateManyWithoutUpdatedByNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutUpdatedByInput, Prisma.UserUncheckedCreateWithoutUpdatedByInput> | Prisma.UserCreateWithoutUpdatedByInput[] | Prisma.UserUncheckedCreateWithoutUpdatedByInput[];
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutUpdatedByInput | Prisma.UserCreateOrConnectWithoutUpdatedByInput[];
    upsert?: Prisma.UserUpsertWithWhereUniqueWithoutUpdatedByInput | Prisma.UserUpsertWithWhereUniqueWithoutUpdatedByInput[];
    createMany?: Prisma.UserCreateManyUpdatedByInputEnvelope;
    set?: Prisma.UserWhereUniqueInput | Prisma.UserWhereUniqueInput[];
    disconnect?: Prisma.UserWhereUniqueInput | Prisma.UserWhereUniqueInput[];
    delete?: Prisma.UserWhereUniqueInput | Prisma.UserWhereUniqueInput[];
    connect?: Prisma.UserWhereUniqueInput | Prisma.UserWhereUniqueInput[];
    update?: Prisma.UserUpdateWithWhereUniqueWithoutUpdatedByInput | Prisma.UserUpdateWithWhereUniqueWithoutUpdatedByInput[];
    updateMany?: Prisma.UserUpdateManyWithWhereWithoutUpdatedByInput | Prisma.UserUpdateManyWithWhereWithoutUpdatedByInput[];
    deleteMany?: Prisma.UserScalarWhereInput | Prisma.UserScalarWhereInput[];
};
export type UserCreateNestedOneWithoutGamesCreatedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutGamesCreatedInput, Prisma.UserUncheckedCreateWithoutGamesCreatedInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutGamesCreatedInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserCreateNestedOneWithoutGamesUpdatedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutGamesUpdatedInput, Prisma.UserUncheckedCreateWithoutGamesUpdatedInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutGamesUpdatedInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneWithoutGamesCreatedNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutGamesCreatedInput, Prisma.UserUncheckedCreateWithoutGamesCreatedInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutGamesCreatedInput;
    upsert?: Prisma.UserUpsertWithoutGamesCreatedInput;
    disconnect?: Prisma.UserWhereInput | boolean;
    delete?: Prisma.UserWhereInput | boolean;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutGamesCreatedInput, Prisma.UserUpdateWithoutGamesCreatedInput>, Prisma.UserUncheckedUpdateWithoutGamesCreatedInput>;
};
export type UserUpdateOneWithoutGamesUpdatedNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutGamesUpdatedInput, Prisma.UserUncheckedCreateWithoutGamesUpdatedInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutGamesUpdatedInput;
    upsert?: Prisma.UserUpsertWithoutGamesUpdatedInput;
    disconnect?: Prisma.UserWhereInput | boolean;
    delete?: Prisma.UserWhereInput | boolean;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutGamesUpdatedInput, Prisma.UserUpdateWithoutGamesUpdatedInput>, Prisma.UserUncheckedUpdateWithoutGamesUpdatedInput>;
};
export type UserCreateNestedOneWithoutVideosCreatedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutVideosCreatedInput, Prisma.UserUncheckedCreateWithoutVideosCreatedInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutVideosCreatedInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserCreateNestedOneWithoutVideosUpdatedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutVideosUpdatedInput, Prisma.UserUncheckedCreateWithoutVideosUpdatedInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutVideosUpdatedInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneWithoutVideosCreatedNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutVideosCreatedInput, Prisma.UserUncheckedCreateWithoutVideosCreatedInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutVideosCreatedInput;
    upsert?: Prisma.UserUpsertWithoutVideosCreatedInput;
    disconnect?: Prisma.UserWhereInput | boolean;
    delete?: Prisma.UserWhereInput | boolean;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutVideosCreatedInput, Prisma.UserUpdateWithoutVideosCreatedInput>, Prisma.UserUncheckedUpdateWithoutVideosCreatedInput>;
};
export type UserUpdateOneWithoutVideosUpdatedNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutVideosUpdatedInput, Prisma.UserUncheckedCreateWithoutVideosUpdatedInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutVideosUpdatedInput;
    upsert?: Prisma.UserUpsertWithoutVideosUpdatedInput;
    disconnect?: Prisma.UserWhereInput | boolean;
    delete?: Prisma.UserWhereInput | boolean;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutVideosUpdatedInput, Prisma.UserUpdateWithoutVideosUpdatedInput>, Prisma.UserUncheckedUpdateWithoutVideosUpdatedInput>;
};
export type UserCreateWithoutUsersICreatedInput = {
    email: string;
    name?: string | null;
    password: string;
    role?: $Enums.UserRole;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    createdBy?: Prisma.UserCreateNestedOneWithoutUsersICreatedInput;
    updatedBy?: Prisma.UserCreateNestedOneWithoutUsersIUpdatedInput;
    usersIUpdated?: Prisma.UserCreateNestedManyWithoutUpdatedByInput;
    gamesCreated?: Prisma.GameCreateNestedManyWithoutCreatedByInput;
    gamesUpdated?: Prisma.GameCreateNestedManyWithoutUpdatedByInput;
    videosCreated?: Prisma.VideoCreateNestedManyWithoutCreatedByInput;
    videosUpdated?: Prisma.VideoCreateNestedManyWithoutUpdatedByInput;
};
export type UserUncheckedCreateWithoutUsersICreatedInput = {
    id?: number;
    email: string;
    name?: string | null;
    password: string;
    role?: $Enums.UserRole;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    createdById?: number | null;
    updatedById?: number | null;
    usersIUpdated?: Prisma.UserUncheckedCreateNestedManyWithoutUpdatedByInput;
    gamesCreated?: Prisma.GameUncheckedCreateNestedManyWithoutCreatedByInput;
    gamesUpdated?: Prisma.GameUncheckedCreateNestedManyWithoutUpdatedByInput;
    videosCreated?: Prisma.VideoUncheckedCreateNestedManyWithoutCreatedByInput;
    videosUpdated?: Prisma.VideoUncheckedCreateNestedManyWithoutUpdatedByInput;
};
export type UserCreateOrConnectWithoutUsersICreatedInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutUsersICreatedInput, Prisma.UserUncheckedCreateWithoutUsersICreatedInput>;
};
export type UserCreateWithoutUsersIUpdatedInput = {
    email: string;
    name?: string | null;
    password: string;
    role?: $Enums.UserRole;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    createdBy?: Prisma.UserCreateNestedOneWithoutUsersICreatedInput;
    updatedBy?: Prisma.UserCreateNestedOneWithoutUsersIUpdatedInput;
    usersICreated?: Prisma.UserCreateNestedManyWithoutCreatedByInput;
    gamesCreated?: Prisma.GameCreateNestedManyWithoutCreatedByInput;
    gamesUpdated?: Prisma.GameCreateNestedManyWithoutUpdatedByInput;
    videosCreated?: Prisma.VideoCreateNestedManyWithoutCreatedByInput;
    videosUpdated?: Prisma.VideoCreateNestedManyWithoutUpdatedByInput;
};
export type UserUncheckedCreateWithoutUsersIUpdatedInput = {
    id?: number;
    email: string;
    name?: string | null;
    password: string;
    role?: $Enums.UserRole;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    createdById?: number | null;
    updatedById?: number | null;
    usersICreated?: Prisma.UserUncheckedCreateNestedManyWithoutCreatedByInput;
    gamesCreated?: Prisma.GameUncheckedCreateNestedManyWithoutCreatedByInput;
    gamesUpdated?: Prisma.GameUncheckedCreateNestedManyWithoutUpdatedByInput;
    videosCreated?: Prisma.VideoUncheckedCreateNestedManyWithoutCreatedByInput;
    videosUpdated?: Prisma.VideoUncheckedCreateNestedManyWithoutUpdatedByInput;
};
export type UserCreateOrConnectWithoutUsersIUpdatedInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutUsersIUpdatedInput, Prisma.UserUncheckedCreateWithoutUsersIUpdatedInput>;
};
export type UserCreateWithoutCreatedByInput = {
    email: string;
    name?: string | null;
    password: string;
    role?: $Enums.UserRole;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    updatedBy?: Prisma.UserCreateNestedOneWithoutUsersIUpdatedInput;
    usersICreated?: Prisma.UserCreateNestedManyWithoutCreatedByInput;
    usersIUpdated?: Prisma.UserCreateNestedManyWithoutUpdatedByInput;
    gamesCreated?: Prisma.GameCreateNestedManyWithoutCreatedByInput;
    gamesUpdated?: Prisma.GameCreateNestedManyWithoutUpdatedByInput;
    videosCreated?: Prisma.VideoCreateNestedManyWithoutCreatedByInput;
    videosUpdated?: Prisma.VideoCreateNestedManyWithoutUpdatedByInput;
};
export type UserUncheckedCreateWithoutCreatedByInput = {
    id?: number;
    email: string;
    name?: string | null;
    password: string;
    role?: $Enums.UserRole;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    updatedById?: number | null;
    usersICreated?: Prisma.UserUncheckedCreateNestedManyWithoutCreatedByInput;
    usersIUpdated?: Prisma.UserUncheckedCreateNestedManyWithoutUpdatedByInput;
    gamesCreated?: Prisma.GameUncheckedCreateNestedManyWithoutCreatedByInput;
    gamesUpdated?: Prisma.GameUncheckedCreateNestedManyWithoutUpdatedByInput;
    videosCreated?: Prisma.VideoUncheckedCreateNestedManyWithoutCreatedByInput;
    videosUpdated?: Prisma.VideoUncheckedCreateNestedManyWithoutUpdatedByInput;
};
export type UserCreateOrConnectWithoutCreatedByInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutCreatedByInput, Prisma.UserUncheckedCreateWithoutCreatedByInput>;
};
export type UserCreateManyCreatedByInputEnvelope = {
    data: Prisma.UserCreateManyCreatedByInput | Prisma.UserCreateManyCreatedByInput[];
    skipDuplicates?: boolean;
};
export type UserCreateWithoutUpdatedByInput = {
    email: string;
    name?: string | null;
    password: string;
    role?: $Enums.UserRole;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    createdBy?: Prisma.UserCreateNestedOneWithoutUsersICreatedInput;
    usersICreated?: Prisma.UserCreateNestedManyWithoutCreatedByInput;
    usersIUpdated?: Prisma.UserCreateNestedManyWithoutUpdatedByInput;
    gamesCreated?: Prisma.GameCreateNestedManyWithoutCreatedByInput;
    gamesUpdated?: Prisma.GameCreateNestedManyWithoutUpdatedByInput;
    videosCreated?: Prisma.VideoCreateNestedManyWithoutCreatedByInput;
    videosUpdated?: Prisma.VideoCreateNestedManyWithoutUpdatedByInput;
};
export type UserUncheckedCreateWithoutUpdatedByInput = {
    id?: number;
    email: string;
    name?: string | null;
    password: string;
    role?: $Enums.UserRole;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    createdById?: number | null;
    usersICreated?: Prisma.UserUncheckedCreateNestedManyWithoutCreatedByInput;
    usersIUpdated?: Prisma.UserUncheckedCreateNestedManyWithoutUpdatedByInput;
    gamesCreated?: Prisma.GameUncheckedCreateNestedManyWithoutCreatedByInput;
    gamesUpdated?: Prisma.GameUncheckedCreateNestedManyWithoutUpdatedByInput;
    videosCreated?: Prisma.VideoUncheckedCreateNestedManyWithoutCreatedByInput;
    videosUpdated?: Prisma.VideoUncheckedCreateNestedManyWithoutUpdatedByInput;
};
export type UserCreateOrConnectWithoutUpdatedByInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutUpdatedByInput, Prisma.UserUncheckedCreateWithoutUpdatedByInput>;
};
export type UserCreateManyUpdatedByInputEnvelope = {
    data: Prisma.UserCreateManyUpdatedByInput | Prisma.UserCreateManyUpdatedByInput[];
    skipDuplicates?: boolean;
};
export type UserUpsertWithoutUsersICreatedInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutUsersICreatedInput, Prisma.UserUncheckedUpdateWithoutUsersICreatedInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutUsersICreatedInput, Prisma.UserUncheckedCreateWithoutUsersICreatedInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutUsersICreatedInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutUsersICreatedInput, Prisma.UserUncheckedUpdateWithoutUsersICreatedInput>;
};
export type UserUpdateWithoutUsersICreatedInput = {
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdBy?: Prisma.UserUpdateOneWithoutUsersICreatedNestedInput;
    updatedBy?: Prisma.UserUpdateOneWithoutUsersIUpdatedNestedInput;
    usersIUpdated?: Prisma.UserUpdateManyWithoutUpdatedByNestedInput;
    gamesCreated?: Prisma.GameUpdateManyWithoutCreatedByNestedInput;
    gamesUpdated?: Prisma.GameUpdateManyWithoutUpdatedByNestedInput;
    videosCreated?: Prisma.VideoUpdateManyWithoutCreatedByNestedInput;
    videosUpdated?: Prisma.VideoUpdateManyWithoutUpdatedByNestedInput;
};
export type UserUncheckedUpdateWithoutUsersICreatedInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdById?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    updatedById?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    usersIUpdated?: Prisma.UserUncheckedUpdateManyWithoutUpdatedByNestedInput;
    gamesCreated?: Prisma.GameUncheckedUpdateManyWithoutCreatedByNestedInput;
    gamesUpdated?: Prisma.GameUncheckedUpdateManyWithoutUpdatedByNestedInput;
    videosCreated?: Prisma.VideoUncheckedUpdateManyWithoutCreatedByNestedInput;
    videosUpdated?: Prisma.VideoUncheckedUpdateManyWithoutUpdatedByNestedInput;
};
export type UserUpsertWithoutUsersIUpdatedInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutUsersIUpdatedInput, Prisma.UserUncheckedUpdateWithoutUsersIUpdatedInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutUsersIUpdatedInput, Prisma.UserUncheckedCreateWithoutUsersIUpdatedInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutUsersIUpdatedInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutUsersIUpdatedInput, Prisma.UserUncheckedUpdateWithoutUsersIUpdatedInput>;
};
export type UserUpdateWithoutUsersIUpdatedInput = {
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdBy?: Prisma.UserUpdateOneWithoutUsersICreatedNestedInput;
    updatedBy?: Prisma.UserUpdateOneWithoutUsersIUpdatedNestedInput;
    usersICreated?: Prisma.UserUpdateManyWithoutCreatedByNestedInput;
    gamesCreated?: Prisma.GameUpdateManyWithoutCreatedByNestedInput;
    gamesUpdated?: Prisma.GameUpdateManyWithoutUpdatedByNestedInput;
    videosCreated?: Prisma.VideoUpdateManyWithoutCreatedByNestedInput;
    videosUpdated?: Prisma.VideoUpdateManyWithoutUpdatedByNestedInput;
};
export type UserUncheckedUpdateWithoutUsersIUpdatedInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdById?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    updatedById?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    usersICreated?: Prisma.UserUncheckedUpdateManyWithoutCreatedByNestedInput;
    gamesCreated?: Prisma.GameUncheckedUpdateManyWithoutCreatedByNestedInput;
    gamesUpdated?: Prisma.GameUncheckedUpdateManyWithoutUpdatedByNestedInput;
    videosCreated?: Prisma.VideoUncheckedUpdateManyWithoutCreatedByNestedInput;
    videosUpdated?: Prisma.VideoUncheckedUpdateManyWithoutUpdatedByNestedInput;
};
export type UserUpsertWithWhereUniqueWithoutCreatedByInput = {
    where: Prisma.UserWhereUniqueInput;
    update: Prisma.XOR<Prisma.UserUpdateWithoutCreatedByInput, Prisma.UserUncheckedUpdateWithoutCreatedByInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutCreatedByInput, Prisma.UserUncheckedCreateWithoutCreatedByInput>;
};
export type UserUpdateWithWhereUniqueWithoutCreatedByInput = {
    where: Prisma.UserWhereUniqueInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutCreatedByInput, Prisma.UserUncheckedUpdateWithoutCreatedByInput>;
};
export type UserUpdateManyWithWhereWithoutCreatedByInput = {
    where: Prisma.UserScalarWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateManyMutationInput, Prisma.UserUncheckedUpdateManyWithoutCreatedByInput>;
};
export type UserScalarWhereInput = {
    AND?: Prisma.UserScalarWhereInput | Prisma.UserScalarWhereInput[];
    OR?: Prisma.UserScalarWhereInput[];
    NOT?: Prisma.UserScalarWhereInput | Prisma.UserScalarWhereInput[];
    id?: Prisma.IntFilter<"User"> | number;
    email?: Prisma.StringFilter<"User"> | string;
    name?: Prisma.StringNullableFilter<"User"> | string | null;
    password?: Prisma.StringFilter<"User"> | string;
    role?: Prisma.EnumUserRoleFilter<"User"> | $Enums.UserRole;
    createdAt?: Prisma.DateTimeFilter<"User"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"User"> | Date | string;
    createdById?: Prisma.IntNullableFilter<"User"> | number | null;
    updatedById?: Prisma.IntNullableFilter<"User"> | number | null;
};
export type UserUpsertWithWhereUniqueWithoutUpdatedByInput = {
    where: Prisma.UserWhereUniqueInput;
    update: Prisma.XOR<Prisma.UserUpdateWithoutUpdatedByInput, Prisma.UserUncheckedUpdateWithoutUpdatedByInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutUpdatedByInput, Prisma.UserUncheckedCreateWithoutUpdatedByInput>;
};
export type UserUpdateWithWhereUniqueWithoutUpdatedByInput = {
    where: Prisma.UserWhereUniqueInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutUpdatedByInput, Prisma.UserUncheckedUpdateWithoutUpdatedByInput>;
};
export type UserUpdateManyWithWhereWithoutUpdatedByInput = {
    where: Prisma.UserScalarWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateManyMutationInput, Prisma.UserUncheckedUpdateManyWithoutUpdatedByInput>;
};
export type UserCreateWithoutGamesCreatedInput = {
    email: string;
    name?: string | null;
    password: string;
    role?: $Enums.UserRole;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    createdBy?: Prisma.UserCreateNestedOneWithoutUsersICreatedInput;
    updatedBy?: Prisma.UserCreateNestedOneWithoutUsersIUpdatedInput;
    usersICreated?: Prisma.UserCreateNestedManyWithoutCreatedByInput;
    usersIUpdated?: Prisma.UserCreateNestedManyWithoutUpdatedByInput;
    gamesUpdated?: Prisma.GameCreateNestedManyWithoutUpdatedByInput;
    videosCreated?: Prisma.VideoCreateNestedManyWithoutCreatedByInput;
    videosUpdated?: Prisma.VideoCreateNestedManyWithoutUpdatedByInput;
};
export type UserUncheckedCreateWithoutGamesCreatedInput = {
    id?: number;
    email: string;
    name?: string | null;
    password: string;
    role?: $Enums.UserRole;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    createdById?: number | null;
    updatedById?: number | null;
    usersICreated?: Prisma.UserUncheckedCreateNestedManyWithoutCreatedByInput;
    usersIUpdated?: Prisma.UserUncheckedCreateNestedManyWithoutUpdatedByInput;
    gamesUpdated?: Prisma.GameUncheckedCreateNestedManyWithoutUpdatedByInput;
    videosCreated?: Prisma.VideoUncheckedCreateNestedManyWithoutCreatedByInput;
    videosUpdated?: Prisma.VideoUncheckedCreateNestedManyWithoutUpdatedByInput;
};
export type UserCreateOrConnectWithoutGamesCreatedInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutGamesCreatedInput, Prisma.UserUncheckedCreateWithoutGamesCreatedInput>;
};
export type UserCreateWithoutGamesUpdatedInput = {
    email: string;
    name?: string | null;
    password: string;
    role?: $Enums.UserRole;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    createdBy?: Prisma.UserCreateNestedOneWithoutUsersICreatedInput;
    updatedBy?: Prisma.UserCreateNestedOneWithoutUsersIUpdatedInput;
    usersICreated?: Prisma.UserCreateNestedManyWithoutCreatedByInput;
    usersIUpdated?: Prisma.UserCreateNestedManyWithoutUpdatedByInput;
    gamesCreated?: Prisma.GameCreateNestedManyWithoutCreatedByInput;
    videosCreated?: Prisma.VideoCreateNestedManyWithoutCreatedByInput;
    videosUpdated?: Prisma.VideoCreateNestedManyWithoutUpdatedByInput;
};
export type UserUncheckedCreateWithoutGamesUpdatedInput = {
    id?: number;
    email: string;
    name?: string | null;
    password: string;
    role?: $Enums.UserRole;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    createdById?: number | null;
    updatedById?: number | null;
    usersICreated?: Prisma.UserUncheckedCreateNestedManyWithoutCreatedByInput;
    usersIUpdated?: Prisma.UserUncheckedCreateNestedManyWithoutUpdatedByInput;
    gamesCreated?: Prisma.GameUncheckedCreateNestedManyWithoutCreatedByInput;
    videosCreated?: Prisma.VideoUncheckedCreateNestedManyWithoutCreatedByInput;
    videosUpdated?: Prisma.VideoUncheckedCreateNestedManyWithoutUpdatedByInput;
};
export type UserCreateOrConnectWithoutGamesUpdatedInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutGamesUpdatedInput, Prisma.UserUncheckedCreateWithoutGamesUpdatedInput>;
};
export type UserUpsertWithoutGamesCreatedInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutGamesCreatedInput, Prisma.UserUncheckedUpdateWithoutGamesCreatedInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutGamesCreatedInput, Prisma.UserUncheckedCreateWithoutGamesCreatedInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutGamesCreatedInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutGamesCreatedInput, Prisma.UserUncheckedUpdateWithoutGamesCreatedInput>;
};
export type UserUpdateWithoutGamesCreatedInput = {
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdBy?: Prisma.UserUpdateOneWithoutUsersICreatedNestedInput;
    updatedBy?: Prisma.UserUpdateOneWithoutUsersIUpdatedNestedInput;
    usersICreated?: Prisma.UserUpdateManyWithoutCreatedByNestedInput;
    usersIUpdated?: Prisma.UserUpdateManyWithoutUpdatedByNestedInput;
    gamesUpdated?: Prisma.GameUpdateManyWithoutUpdatedByNestedInput;
    videosCreated?: Prisma.VideoUpdateManyWithoutCreatedByNestedInput;
    videosUpdated?: Prisma.VideoUpdateManyWithoutUpdatedByNestedInput;
};
export type UserUncheckedUpdateWithoutGamesCreatedInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdById?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    updatedById?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    usersICreated?: Prisma.UserUncheckedUpdateManyWithoutCreatedByNestedInput;
    usersIUpdated?: Prisma.UserUncheckedUpdateManyWithoutUpdatedByNestedInput;
    gamesUpdated?: Prisma.GameUncheckedUpdateManyWithoutUpdatedByNestedInput;
    videosCreated?: Prisma.VideoUncheckedUpdateManyWithoutCreatedByNestedInput;
    videosUpdated?: Prisma.VideoUncheckedUpdateManyWithoutUpdatedByNestedInput;
};
export type UserUpsertWithoutGamesUpdatedInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutGamesUpdatedInput, Prisma.UserUncheckedUpdateWithoutGamesUpdatedInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutGamesUpdatedInput, Prisma.UserUncheckedCreateWithoutGamesUpdatedInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutGamesUpdatedInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutGamesUpdatedInput, Prisma.UserUncheckedUpdateWithoutGamesUpdatedInput>;
};
export type UserUpdateWithoutGamesUpdatedInput = {
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdBy?: Prisma.UserUpdateOneWithoutUsersICreatedNestedInput;
    updatedBy?: Prisma.UserUpdateOneWithoutUsersIUpdatedNestedInput;
    usersICreated?: Prisma.UserUpdateManyWithoutCreatedByNestedInput;
    usersIUpdated?: Prisma.UserUpdateManyWithoutUpdatedByNestedInput;
    gamesCreated?: Prisma.GameUpdateManyWithoutCreatedByNestedInput;
    videosCreated?: Prisma.VideoUpdateManyWithoutCreatedByNestedInput;
    videosUpdated?: Prisma.VideoUpdateManyWithoutUpdatedByNestedInput;
};
export type UserUncheckedUpdateWithoutGamesUpdatedInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdById?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    updatedById?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    usersICreated?: Prisma.UserUncheckedUpdateManyWithoutCreatedByNestedInput;
    usersIUpdated?: Prisma.UserUncheckedUpdateManyWithoutUpdatedByNestedInput;
    gamesCreated?: Prisma.GameUncheckedUpdateManyWithoutCreatedByNestedInput;
    videosCreated?: Prisma.VideoUncheckedUpdateManyWithoutCreatedByNestedInput;
    videosUpdated?: Prisma.VideoUncheckedUpdateManyWithoutUpdatedByNestedInput;
};
export type UserCreateWithoutVideosCreatedInput = {
    email: string;
    name?: string | null;
    password: string;
    role?: $Enums.UserRole;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    createdBy?: Prisma.UserCreateNestedOneWithoutUsersICreatedInput;
    updatedBy?: Prisma.UserCreateNestedOneWithoutUsersIUpdatedInput;
    usersICreated?: Prisma.UserCreateNestedManyWithoutCreatedByInput;
    usersIUpdated?: Prisma.UserCreateNestedManyWithoutUpdatedByInput;
    gamesCreated?: Prisma.GameCreateNestedManyWithoutCreatedByInput;
    gamesUpdated?: Prisma.GameCreateNestedManyWithoutUpdatedByInput;
    videosUpdated?: Prisma.VideoCreateNestedManyWithoutUpdatedByInput;
};
export type UserUncheckedCreateWithoutVideosCreatedInput = {
    id?: number;
    email: string;
    name?: string | null;
    password: string;
    role?: $Enums.UserRole;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    createdById?: number | null;
    updatedById?: number | null;
    usersICreated?: Prisma.UserUncheckedCreateNestedManyWithoutCreatedByInput;
    usersIUpdated?: Prisma.UserUncheckedCreateNestedManyWithoutUpdatedByInput;
    gamesCreated?: Prisma.GameUncheckedCreateNestedManyWithoutCreatedByInput;
    gamesUpdated?: Prisma.GameUncheckedCreateNestedManyWithoutUpdatedByInput;
    videosUpdated?: Prisma.VideoUncheckedCreateNestedManyWithoutUpdatedByInput;
};
export type UserCreateOrConnectWithoutVideosCreatedInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutVideosCreatedInput, Prisma.UserUncheckedCreateWithoutVideosCreatedInput>;
};
export type UserCreateWithoutVideosUpdatedInput = {
    email: string;
    name?: string | null;
    password: string;
    role?: $Enums.UserRole;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    createdBy?: Prisma.UserCreateNestedOneWithoutUsersICreatedInput;
    updatedBy?: Prisma.UserCreateNestedOneWithoutUsersIUpdatedInput;
    usersICreated?: Prisma.UserCreateNestedManyWithoutCreatedByInput;
    usersIUpdated?: Prisma.UserCreateNestedManyWithoutUpdatedByInput;
    gamesCreated?: Prisma.GameCreateNestedManyWithoutCreatedByInput;
    gamesUpdated?: Prisma.GameCreateNestedManyWithoutUpdatedByInput;
    videosCreated?: Prisma.VideoCreateNestedManyWithoutCreatedByInput;
};
export type UserUncheckedCreateWithoutVideosUpdatedInput = {
    id?: number;
    email: string;
    name?: string | null;
    password: string;
    role?: $Enums.UserRole;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    createdById?: number | null;
    updatedById?: number | null;
    usersICreated?: Prisma.UserUncheckedCreateNestedManyWithoutCreatedByInput;
    usersIUpdated?: Prisma.UserUncheckedCreateNestedManyWithoutUpdatedByInput;
    gamesCreated?: Prisma.GameUncheckedCreateNestedManyWithoutCreatedByInput;
    gamesUpdated?: Prisma.GameUncheckedCreateNestedManyWithoutUpdatedByInput;
    videosCreated?: Prisma.VideoUncheckedCreateNestedManyWithoutCreatedByInput;
};
export type UserCreateOrConnectWithoutVideosUpdatedInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutVideosUpdatedInput, Prisma.UserUncheckedCreateWithoutVideosUpdatedInput>;
};
export type UserUpsertWithoutVideosCreatedInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutVideosCreatedInput, Prisma.UserUncheckedUpdateWithoutVideosCreatedInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutVideosCreatedInput, Prisma.UserUncheckedCreateWithoutVideosCreatedInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutVideosCreatedInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutVideosCreatedInput, Prisma.UserUncheckedUpdateWithoutVideosCreatedInput>;
};
export type UserUpdateWithoutVideosCreatedInput = {
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdBy?: Prisma.UserUpdateOneWithoutUsersICreatedNestedInput;
    updatedBy?: Prisma.UserUpdateOneWithoutUsersIUpdatedNestedInput;
    usersICreated?: Prisma.UserUpdateManyWithoutCreatedByNestedInput;
    usersIUpdated?: Prisma.UserUpdateManyWithoutUpdatedByNestedInput;
    gamesCreated?: Prisma.GameUpdateManyWithoutCreatedByNestedInput;
    gamesUpdated?: Prisma.GameUpdateManyWithoutUpdatedByNestedInput;
    videosUpdated?: Prisma.VideoUpdateManyWithoutUpdatedByNestedInput;
};
export type UserUncheckedUpdateWithoutVideosCreatedInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdById?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    updatedById?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    usersICreated?: Prisma.UserUncheckedUpdateManyWithoutCreatedByNestedInput;
    usersIUpdated?: Prisma.UserUncheckedUpdateManyWithoutUpdatedByNestedInput;
    gamesCreated?: Prisma.GameUncheckedUpdateManyWithoutCreatedByNestedInput;
    gamesUpdated?: Prisma.GameUncheckedUpdateManyWithoutUpdatedByNestedInput;
    videosUpdated?: Prisma.VideoUncheckedUpdateManyWithoutUpdatedByNestedInput;
};
export type UserUpsertWithoutVideosUpdatedInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutVideosUpdatedInput, Prisma.UserUncheckedUpdateWithoutVideosUpdatedInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutVideosUpdatedInput, Prisma.UserUncheckedCreateWithoutVideosUpdatedInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutVideosUpdatedInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutVideosUpdatedInput, Prisma.UserUncheckedUpdateWithoutVideosUpdatedInput>;
};
export type UserUpdateWithoutVideosUpdatedInput = {
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdBy?: Prisma.UserUpdateOneWithoutUsersICreatedNestedInput;
    updatedBy?: Prisma.UserUpdateOneWithoutUsersIUpdatedNestedInput;
    usersICreated?: Prisma.UserUpdateManyWithoutCreatedByNestedInput;
    usersIUpdated?: Prisma.UserUpdateManyWithoutUpdatedByNestedInput;
    gamesCreated?: Prisma.GameUpdateManyWithoutCreatedByNestedInput;
    gamesUpdated?: Prisma.GameUpdateManyWithoutUpdatedByNestedInput;
    videosCreated?: Prisma.VideoUpdateManyWithoutCreatedByNestedInput;
};
export type UserUncheckedUpdateWithoutVideosUpdatedInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdById?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    updatedById?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    usersICreated?: Prisma.UserUncheckedUpdateManyWithoutCreatedByNestedInput;
    usersIUpdated?: Prisma.UserUncheckedUpdateManyWithoutUpdatedByNestedInput;
    gamesCreated?: Prisma.GameUncheckedUpdateManyWithoutCreatedByNestedInput;
    gamesUpdated?: Prisma.GameUncheckedUpdateManyWithoutUpdatedByNestedInput;
    videosCreated?: Prisma.VideoUncheckedUpdateManyWithoutCreatedByNestedInput;
};
export type UserCreateManyCreatedByInput = {
    id?: number;
    email: string;
    name?: string | null;
    password: string;
    role?: $Enums.UserRole;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    updatedById?: number | null;
};
export type UserCreateManyUpdatedByInput = {
    id?: number;
    email: string;
    name?: string | null;
    password: string;
    role?: $Enums.UserRole;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    createdById?: number | null;
};
export type UserUpdateWithoutCreatedByInput = {
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedBy?: Prisma.UserUpdateOneWithoutUsersIUpdatedNestedInput;
    usersICreated?: Prisma.UserUpdateManyWithoutCreatedByNestedInput;
    usersIUpdated?: Prisma.UserUpdateManyWithoutUpdatedByNestedInput;
    gamesCreated?: Prisma.GameUpdateManyWithoutCreatedByNestedInput;
    gamesUpdated?: Prisma.GameUpdateManyWithoutUpdatedByNestedInput;
    videosCreated?: Prisma.VideoUpdateManyWithoutCreatedByNestedInput;
    videosUpdated?: Prisma.VideoUpdateManyWithoutUpdatedByNestedInput;
};
export type UserUncheckedUpdateWithoutCreatedByInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedById?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    usersICreated?: Prisma.UserUncheckedUpdateManyWithoutCreatedByNestedInput;
    usersIUpdated?: Prisma.UserUncheckedUpdateManyWithoutUpdatedByNestedInput;
    gamesCreated?: Prisma.GameUncheckedUpdateManyWithoutCreatedByNestedInput;
    gamesUpdated?: Prisma.GameUncheckedUpdateManyWithoutUpdatedByNestedInput;
    videosCreated?: Prisma.VideoUncheckedUpdateManyWithoutCreatedByNestedInput;
    videosUpdated?: Prisma.VideoUncheckedUpdateManyWithoutUpdatedByNestedInput;
};
export type UserUncheckedUpdateManyWithoutCreatedByInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedById?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
};
export type UserUpdateWithoutUpdatedByInput = {
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdBy?: Prisma.UserUpdateOneWithoutUsersICreatedNestedInput;
    usersICreated?: Prisma.UserUpdateManyWithoutCreatedByNestedInput;
    usersIUpdated?: Prisma.UserUpdateManyWithoutUpdatedByNestedInput;
    gamesCreated?: Prisma.GameUpdateManyWithoutCreatedByNestedInput;
    gamesUpdated?: Prisma.GameUpdateManyWithoutUpdatedByNestedInput;
    videosCreated?: Prisma.VideoUpdateManyWithoutCreatedByNestedInput;
    videosUpdated?: Prisma.VideoUpdateManyWithoutUpdatedByNestedInput;
};
export type UserUncheckedUpdateWithoutUpdatedByInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdById?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    usersICreated?: Prisma.UserUncheckedUpdateManyWithoutCreatedByNestedInput;
    usersIUpdated?: Prisma.UserUncheckedUpdateManyWithoutUpdatedByNestedInput;
    gamesCreated?: Prisma.GameUncheckedUpdateManyWithoutCreatedByNestedInput;
    gamesUpdated?: Prisma.GameUncheckedUpdateManyWithoutUpdatedByNestedInput;
    videosCreated?: Prisma.VideoUncheckedUpdateManyWithoutCreatedByNestedInput;
    videosUpdated?: Prisma.VideoUncheckedUpdateManyWithoutUpdatedByNestedInput;
};
export type UserUncheckedUpdateManyWithoutUpdatedByInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdById?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
};
/**
 * Count Type UserCountOutputType
 */
export type UserCountOutputType = {
    usersICreated: number;
    usersIUpdated: number;
    gamesCreated: number;
    gamesUpdated: number;
    videosCreated: number;
    videosUpdated: number;
};
export type UserCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    usersICreated?: boolean | UserCountOutputTypeCountUsersICreatedArgs;
    usersIUpdated?: boolean | UserCountOutputTypeCountUsersIUpdatedArgs;
    gamesCreated?: boolean | UserCountOutputTypeCountGamesCreatedArgs;
    gamesUpdated?: boolean | UserCountOutputTypeCountGamesUpdatedArgs;
    videosCreated?: boolean | UserCountOutputTypeCountVideosCreatedArgs;
    videosUpdated?: boolean | UserCountOutputTypeCountVideosUpdatedArgs;
};
/**
 * UserCountOutputType without action
 */
export type UserCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: Prisma.UserCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * UserCountOutputType without action
 */
export type UserCountOutputTypeCountUsersICreatedArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UserWhereInput;
};
/**
 * UserCountOutputType without action
 */
export type UserCountOutputTypeCountUsersIUpdatedArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UserWhereInput;
};
/**
 * UserCountOutputType without action
 */
export type UserCountOutputTypeCountGamesCreatedArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.GameWhereInput;
};
/**
 * UserCountOutputType without action
 */
export type UserCountOutputTypeCountGamesUpdatedArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.GameWhereInput;
};
/**
 * UserCountOutputType without action
 */
export type UserCountOutputTypeCountVideosCreatedArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.VideoWhereInput;
};
/**
 * UserCountOutputType without action
 */
export type UserCountOutputTypeCountVideosUpdatedArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.VideoWhereInput;
};
export type UserSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    email?: boolean;
    name?: boolean;
    password?: boolean;
    role?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    createdById?: boolean;
    updatedById?: boolean;
    createdBy?: boolean | Prisma.User$createdByArgs<ExtArgs>;
    updatedBy?: boolean | Prisma.User$updatedByArgs<ExtArgs>;
    usersICreated?: boolean | Prisma.User$usersICreatedArgs<ExtArgs>;
    usersIUpdated?: boolean | Prisma.User$usersIUpdatedArgs<ExtArgs>;
    gamesCreated?: boolean | Prisma.User$gamesCreatedArgs<ExtArgs>;
    gamesUpdated?: boolean | Prisma.User$gamesUpdatedArgs<ExtArgs>;
    videosCreated?: boolean | Prisma.User$videosCreatedArgs<ExtArgs>;
    videosUpdated?: boolean | Prisma.User$videosUpdatedArgs<ExtArgs>;
    _count?: boolean | Prisma.UserCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["user"]>;
export type UserSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    email?: boolean;
    name?: boolean;
    password?: boolean;
    role?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    createdById?: boolean;
    updatedById?: boolean;
    createdBy?: boolean | Prisma.User$createdByArgs<ExtArgs>;
    updatedBy?: boolean | Prisma.User$updatedByArgs<ExtArgs>;
}, ExtArgs["result"]["user"]>;
export type UserSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    email?: boolean;
    name?: boolean;
    password?: boolean;
    role?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    createdById?: boolean;
    updatedById?: boolean;
    createdBy?: boolean | Prisma.User$createdByArgs<ExtArgs>;
    updatedBy?: boolean | Prisma.User$updatedByArgs<ExtArgs>;
}, ExtArgs["result"]["user"]>;
export type UserSelectScalar = {
    id?: boolean;
    email?: boolean;
    name?: boolean;
    password?: boolean;
    role?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    createdById?: boolean;
    updatedById?: boolean;
};
export type UserOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "email" | "name" | "password" | "role" | "createdAt" | "updatedAt" | "createdById" | "updatedById", ExtArgs["result"]["user"]>;
export type UserInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    createdBy?: boolean | Prisma.User$createdByArgs<ExtArgs>;
    updatedBy?: boolean | Prisma.User$updatedByArgs<ExtArgs>;
    usersICreated?: boolean | Prisma.User$usersICreatedArgs<ExtArgs>;
    usersIUpdated?: boolean | Prisma.User$usersIUpdatedArgs<ExtArgs>;
    gamesCreated?: boolean | Prisma.User$gamesCreatedArgs<ExtArgs>;
    gamesUpdated?: boolean | Prisma.User$gamesUpdatedArgs<ExtArgs>;
    videosCreated?: boolean | Prisma.User$videosCreatedArgs<ExtArgs>;
    videosUpdated?: boolean | Prisma.User$videosUpdatedArgs<ExtArgs>;
    _count?: boolean | Prisma.UserCountOutputTypeDefaultArgs<ExtArgs>;
};
export type UserIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    createdBy?: boolean | Prisma.User$createdByArgs<ExtArgs>;
    updatedBy?: boolean | Prisma.User$updatedByArgs<ExtArgs>;
};
export type UserIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    createdBy?: boolean | Prisma.User$createdByArgs<ExtArgs>;
    updatedBy?: boolean | Prisma.User$updatedByArgs<ExtArgs>;
};
export type $UserPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "User";
    objects: {
        createdBy: Prisma.$UserPayload<ExtArgs> | null;
        updatedBy: Prisma.$UserPayload<ExtArgs> | null;
        usersICreated: Prisma.$UserPayload<ExtArgs>[];
        usersIUpdated: Prisma.$UserPayload<ExtArgs>[];
        gamesCreated: Prisma.$GamePayload<ExtArgs>[];
        gamesUpdated: Prisma.$GamePayload<ExtArgs>[];
        videosCreated: Prisma.$VideoPayload<ExtArgs>[];
        videosUpdated: Prisma.$VideoPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        email: string;
        name: string | null;
        password: string;
        role: $Enums.UserRole;
        createdAt: Date;
        updatedAt: Date;
        createdById: number | null;
        updatedById: number | null;
    }, ExtArgs["result"]["user"]>;
    composites: {};
};
export type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$UserPayload, S>;
export type UserCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: UserCountAggregateInputType | true;
};
export interface UserDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['User'];
        meta: {
            name: 'User';
        };
    };
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: Prisma.SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: Prisma.SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     *
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     *
     */
    findMany<T extends UserFindManyArgs>(args?: Prisma.SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     *
     */
    create<T extends UserCreateArgs>(args: Prisma.SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends UserCreateManyArgs>(args?: Prisma.SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     *
     */
    delete<T extends UserDeleteArgs>(args: Prisma.SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends UserUpdateArgs>(args: Prisma.SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: Prisma.SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends UserUpdateManyArgs>(args: Prisma.SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: Prisma.SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(args?: Prisma.Subset<T, UserCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], UserCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Prisma.Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>;
    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
    **/
    groupBy<T extends UserGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: UserGroupByArgs['orderBy'];
    } : {
        orderBy?: UserGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the User model
     */
    readonly fields: UserFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for User.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__UserClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    createdBy<T extends Prisma.User$createdByArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$createdByArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    updatedBy<T extends Prisma.User$updatedByArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$updatedByArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    usersICreated<T extends Prisma.User$usersICreatedArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$usersICreatedArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    usersIUpdated<T extends Prisma.User$usersIUpdatedArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$usersIUpdatedArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    gamesCreated<T extends Prisma.User$gamesCreatedArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$gamesCreatedArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    gamesUpdated<T extends Prisma.User$gamesUpdatedArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$gamesUpdatedArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    videosCreated<T extends Prisma.User$videosCreatedArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$videosCreatedArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    videosUpdated<T extends Prisma.User$videosUpdatedArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$videosUpdatedArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
/**
 * Fields of the User model
 */
export interface UserFieldRefs {
    readonly id: Prisma.FieldRef<"User", 'Int'>;
    readonly email: Prisma.FieldRef<"User", 'String'>;
    readonly name: Prisma.FieldRef<"User", 'String'>;
    readonly password: Prisma.FieldRef<"User", 'String'>;
    readonly role: Prisma.FieldRef<"User", 'UserRole'>;
    readonly createdAt: Prisma.FieldRef<"User", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"User", 'DateTime'>;
    readonly createdById: Prisma.FieldRef<"User", 'Int'>;
    readonly updatedById: Prisma.FieldRef<"User", 'Int'>;
}
/**
 * User findUnique
 */
export type UserFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: Prisma.UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: Prisma.UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UserInclude<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where: Prisma.UserWhereUniqueInput;
};
/**
 * User findUniqueOrThrow
 */
export type UserFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: Prisma.UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: Prisma.UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UserInclude<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where: Prisma.UserWhereUniqueInput;
};
/**
 * User findFirst
 */
export type UserFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: Prisma.UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: Prisma.UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UserInclude<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where?: Prisma.UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: Prisma.UserOrderByWithRelationInput | Prisma.UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Users.
     */
    cursor?: Prisma.UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Users.
     */
    distinct?: Prisma.UserScalarFieldEnum | Prisma.UserScalarFieldEnum[];
};
/**
 * User findFirstOrThrow
 */
export type UserFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: Prisma.UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: Prisma.UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UserInclude<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where?: Prisma.UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: Prisma.UserOrderByWithRelationInput | Prisma.UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Users.
     */
    cursor?: Prisma.UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Users.
     */
    distinct?: Prisma.UserScalarFieldEnum | Prisma.UserScalarFieldEnum[];
};
/**
 * User findMany
 */
export type UserFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: Prisma.UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: Prisma.UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UserInclude<ExtArgs> | null;
    /**
     * Filter, which Users to fetch.
     */
    where?: Prisma.UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: Prisma.UserOrderByWithRelationInput | Prisma.UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Users.
     */
    cursor?: Prisma.UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Users.
     */
    distinct?: Prisma.UserScalarFieldEnum | Prisma.UserScalarFieldEnum[];
};
/**
 * User create
 */
export type UserCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: Prisma.UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: Prisma.UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UserInclude<ExtArgs> | null;
    /**
     * The data needed to create a User.
     */
    data: Prisma.XOR<Prisma.UserCreateInput, Prisma.UserUncheckedCreateInput>;
};
/**
 * User createMany
 */
export type UserCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: Prisma.UserCreateManyInput | Prisma.UserCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * User createManyAndReturn
 */
export type UserCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: Prisma.UserSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: Prisma.UserOmit<ExtArgs> | null;
    /**
     * The data used to create many Users.
     */
    data: Prisma.UserCreateManyInput | Prisma.UserCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UserIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * User update
 */
export type UserUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: Prisma.UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: Prisma.UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UserInclude<ExtArgs> | null;
    /**
     * The data needed to update a User.
     */
    data: Prisma.XOR<Prisma.UserUpdateInput, Prisma.UserUncheckedUpdateInput>;
    /**
     * Choose, which User to update.
     */
    where: Prisma.UserWhereUniqueInput;
};
/**
 * User updateMany
 */
export type UserUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: Prisma.XOR<Prisma.UserUpdateManyMutationInput, Prisma.UserUncheckedUpdateManyInput>;
    /**
     * Filter which Users to update
     */
    where?: Prisma.UserWhereInput;
    /**
     * Limit how many Users to update.
     */
    limit?: number;
};
/**
 * User updateManyAndReturn
 */
export type UserUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: Prisma.UserSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: Prisma.UserOmit<ExtArgs> | null;
    /**
     * The data used to update Users.
     */
    data: Prisma.XOR<Prisma.UserUpdateManyMutationInput, Prisma.UserUncheckedUpdateManyInput>;
    /**
     * Filter which Users to update
     */
    where?: Prisma.UserWhereInput;
    /**
     * Limit how many Users to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UserIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * User upsert
 */
export type UserUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: Prisma.UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: Prisma.UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UserInclude<ExtArgs> | null;
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: Prisma.UserWhereUniqueInput;
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: Prisma.XOR<Prisma.UserCreateInput, Prisma.UserUncheckedCreateInput>;
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.UserUpdateInput, Prisma.UserUncheckedUpdateInput>;
};
/**
 * User delete
 */
export type UserDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: Prisma.UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: Prisma.UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UserInclude<ExtArgs> | null;
    /**
     * Filter which User to delete.
     */
    where: Prisma.UserWhereUniqueInput;
};
/**
 * User deleteMany
 */
export type UserDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: Prisma.UserWhereInput;
    /**
     * Limit how many Users to delete.
     */
    limit?: number;
};
/**
 * User.createdBy
 */
export type User$createdByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: Prisma.UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: Prisma.UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UserInclude<ExtArgs> | null;
    where?: Prisma.UserWhereInput;
};
/**
 * User.updatedBy
 */
export type User$updatedByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: Prisma.UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: Prisma.UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UserInclude<ExtArgs> | null;
    where?: Prisma.UserWhereInput;
};
/**
 * User.usersICreated
 */
export type User$usersICreatedArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: Prisma.UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: Prisma.UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UserInclude<ExtArgs> | null;
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithRelationInput | Prisma.UserOrderByWithRelationInput[];
    cursor?: Prisma.UserWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UserScalarFieldEnum | Prisma.UserScalarFieldEnum[];
};
/**
 * User.usersIUpdated
 */
export type User$usersIUpdatedArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: Prisma.UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: Prisma.UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UserInclude<ExtArgs> | null;
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithRelationInput | Prisma.UserOrderByWithRelationInput[];
    cursor?: Prisma.UserWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UserScalarFieldEnum | Prisma.UserScalarFieldEnum[];
};
/**
 * User.gamesCreated
 */
export type User$gamesCreatedArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: Prisma.GameSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Game
     */
    omit?: Prisma.GameOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.GameInclude<ExtArgs> | null;
    where?: Prisma.GameWhereInput;
    orderBy?: Prisma.GameOrderByWithRelationInput | Prisma.GameOrderByWithRelationInput[];
    cursor?: Prisma.GameWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.GameScalarFieldEnum | Prisma.GameScalarFieldEnum[];
};
/**
 * User.gamesUpdated
 */
export type User$gamesUpdatedArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: Prisma.GameSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Game
     */
    omit?: Prisma.GameOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.GameInclude<ExtArgs> | null;
    where?: Prisma.GameWhereInput;
    orderBy?: Prisma.GameOrderByWithRelationInput | Prisma.GameOrderByWithRelationInput[];
    cursor?: Prisma.GameWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.GameScalarFieldEnum | Prisma.GameScalarFieldEnum[];
};
/**
 * User.videosCreated
 */
export type User$videosCreatedArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: Prisma.VideoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Video
     */
    omit?: Prisma.VideoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.VideoInclude<ExtArgs> | null;
    where?: Prisma.VideoWhereInput;
    orderBy?: Prisma.VideoOrderByWithRelationInput | Prisma.VideoOrderByWithRelationInput[];
    cursor?: Prisma.VideoWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.VideoScalarFieldEnum | Prisma.VideoScalarFieldEnum[];
};
/**
 * User.videosUpdated
 */
export type User$videosUpdatedArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: Prisma.VideoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Video
     */
    omit?: Prisma.VideoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.VideoInclude<ExtArgs> | null;
    where?: Prisma.VideoWhereInput;
    orderBy?: Prisma.VideoOrderByWithRelationInput | Prisma.VideoOrderByWithRelationInput[];
    cursor?: Prisma.VideoWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.VideoScalarFieldEnum | Prisma.VideoScalarFieldEnum[];
};
/**
 * User without action
 */
export type UserDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: Prisma.UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: Prisma.UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UserInclude<ExtArgs> | null;
};
export {};
//# sourceMappingURL=User.d.ts.map