// AUTO-GENERATED FILE, DO NOT MODIFY.
import { BFast } from "./bfast"
import { EntityTable } from "./entityTable"
import { VimLoader } from "./vimLoader"
import { Vector2, Vector3, Vector4, AABox, AABox2D, AABox4D, Matrix4x4 } from "./structures"
import * as Converters from "./converters"

export interface IAsset {
    index: number
    bufferName?: string
}

export interface IAssetTable {
    getCount(): Promise<number>
    get(assetIndex: number, recursive?: boolean): Promise<IAsset>
    getAll(): Promise<IAsset[]>
    
    getBufferName(assetIndex: number): Promise<string | undefined>
    getAllBufferName(): Promise<string[] | undefined>
}

export class Asset implements IAsset {
    index: number
    bufferName?: string
    
    static async createFromTable(table: IAssetTable, index: number, recursive: boolean = false): Promise<IAsset> {
        let result = new Asset()
        result.index = index
        
        await Promise.all([
            table.getBufferName(index).then(v => result.bufferName = v),
        ])
        
        return result
    }
}

export class AssetTable implements IAssetTable {
    private entityTable: EntityTable
    
    static async createFromDocument(document: VimDocument): Promise<IAssetTable | undefined> {
        const entity = await document.entities.getBfast("Vim.Asset")
        
        if (!entity) {
            return undefined
        }
        
        let table = new AssetTable()
        table.entityTable = new EntityTable(entity, document.strings)
        
        return table
    }
    
    async getCount(): Promise<number> {
        return (await this.entityTable.getArray("string:BufferName"))?.length ?? 0
    }
    
    async get(assetIndex: number, recursive?: boolean): Promise<IAsset> {
        return await Asset.createFromTable(this, assetIndex, recursive)
    }
    
    async getAll(): Promise<IAsset[]> {
        const localTable = await this.entityTable.getLocal()
        
        let bufferName: string[] | undefined
        
        await Promise.all([
            localTable.getStringArray("string:BufferName").then(a => bufferName = a),
        ])
        
        let asset: IAsset[] = []
        
        for (let i = 0; i <= bufferName!.length; i++) {
            asset.push({
                index: i,
                bufferName: bufferName ? bufferName[i] : undefined
            })
        }
        
        return asset
    }
    
    async getBufferName(assetIndex: number): Promise<string | undefined>{
        return await this.entityTable.getString(assetIndex, "string:BufferName")
    }
    
    async getAllBufferName(): Promise<string[] | undefined>{
        return await this.entityTable.getStringArray("string:BufferName")
    }
    
}

export interface IDisplayUnit {
    index: number
    spec?: string
    type?: string
    label?: string
}

export interface IDisplayUnitTable {
    getCount(): Promise<number>
    get(displayUnitIndex: number, recursive?: boolean): Promise<IDisplayUnit>
    getAll(): Promise<IDisplayUnit[]>
    
    getSpec(displayUnitIndex: number): Promise<string | undefined>
    getAllSpec(): Promise<string[] | undefined>
    getType(displayUnitIndex: number): Promise<string | undefined>
    getAllType(): Promise<string[] | undefined>
    getLabel(displayUnitIndex: number): Promise<string | undefined>
    getAllLabel(): Promise<string[] | undefined>
}

export class DisplayUnit implements IDisplayUnit {
    index: number
    spec?: string
    type?: string
    label?: string
    
    static async createFromTable(table: IDisplayUnitTable, index: number, recursive: boolean = false): Promise<IDisplayUnit> {
        let result = new DisplayUnit()
        result.index = index
        
        await Promise.all([
            table.getSpec(index).then(v => result.spec = v),
            table.getType(index).then(v => result.type = v),
            table.getLabel(index).then(v => result.label = v),
        ])
        
        return result
    }
}

export class DisplayUnitTable implements IDisplayUnitTable {
    private entityTable: EntityTable
    
    static async createFromDocument(document: VimDocument): Promise<IDisplayUnitTable | undefined> {
        const entity = await document.entities.getBfast("Vim.DisplayUnit")
        
        if (!entity) {
            return undefined
        }
        
        let table = new DisplayUnitTable()
        table.entityTable = new EntityTable(entity, document.strings)
        
        return table
    }
    
    async getCount(): Promise<number> {
        return (await this.entityTable.getArray("string:Spec"))?.length ?? 0
    }
    
    async get(displayUnitIndex: number, recursive?: boolean): Promise<IDisplayUnit> {
        return await DisplayUnit.createFromTable(this, displayUnitIndex, recursive)
    }
    
    async getAll(): Promise<IDisplayUnit[]> {
        const localTable = await this.entityTable.getLocal()
        
        let spec: string[] | undefined
        let type: string[] | undefined
        let label: string[] | undefined
        
        await Promise.all([
            localTable.getStringArray("string:Spec").then(a => spec = a),
            localTable.getStringArray("string:Type").then(a => type = a),
            localTable.getStringArray("string:Label").then(a => label = a),
        ])
        
        let displayUnit: IDisplayUnit[] = []
        
        for (let i = 0; i <= spec!.length; i++) {
            displayUnit.push({
                index: i,
                spec: spec ? spec[i] : undefined,
                type: type ? type[i] : undefined,
                label: label ? label[i] : undefined
            })
        }
        
        return displayUnit
    }
    
    async getSpec(displayUnitIndex: number): Promise<string | undefined>{
        return await this.entityTable.getString(displayUnitIndex, "string:Spec")
    }
    
    async getAllSpec(): Promise<string[] | undefined>{
        return await this.entityTable.getStringArray("string:Spec")
    }
    
    async getType(displayUnitIndex: number): Promise<string | undefined>{
        return await this.entityTable.getString(displayUnitIndex, "string:Type")
    }
    
    async getAllType(): Promise<string[] | undefined>{
        return await this.entityTable.getStringArray("string:Type")
    }
    
    async getLabel(displayUnitIndex: number): Promise<string | undefined>{
        return await this.entityTable.getString(displayUnitIndex, "string:Label")
    }
    
    async getAllLabel(): Promise<string[] | undefined>{
        return await this.entityTable.getStringArray("string:Label")
    }
    
}

export interface IParameterDescriptor {
    index: number
    name?: string
    group?: string
    parameterType?: string
    isInstance?: boolean
    isShared?: boolean
    isReadOnly?: boolean
    flags?: number
    guid?: string
    
    displayUnitIndex?: number
    displayUnit?: IDisplayUnit
}

export interface IParameterDescriptorTable {
    getCount(): Promise<number>
    get(parameterDescriptorIndex: number, recursive?: boolean): Promise<IParameterDescriptor>
    getAll(): Promise<IParameterDescriptor[]>
    
    getName(parameterDescriptorIndex: number): Promise<string | undefined>
    getAllName(): Promise<string[] | undefined>
    getGroup(parameterDescriptorIndex: number): Promise<string | undefined>
    getAllGroup(): Promise<string[] | undefined>
    getParameterType(parameterDescriptorIndex: number): Promise<string | undefined>
    getAllParameterType(): Promise<string[] | undefined>
    getIsInstance(parameterDescriptorIndex: number): Promise<boolean | undefined>
    getAllIsInstance(): Promise<boolean[] | undefined>
    getIsShared(parameterDescriptorIndex: number): Promise<boolean | undefined>
    getAllIsShared(): Promise<boolean[] | undefined>
    getIsReadOnly(parameterDescriptorIndex: number): Promise<boolean | undefined>
    getAllIsReadOnly(): Promise<boolean[] | undefined>
    getFlags(parameterDescriptorIndex: number): Promise<number | undefined>
    getAllFlags(): Promise<number[] | undefined>
    getGuid(parameterDescriptorIndex: number): Promise<string | undefined>
    getAllGuid(): Promise<string[] | undefined>
    
    getDisplayUnitIndex(parameterDescriptorIndex: number): Promise<number | undefined>
    getAllDisplayUnitIndex(): Promise<number[] | undefined>
    getDisplayUnit(parameterDescriptorIndex: number, recursive?: boolean): Promise<IDisplayUnit | undefined>
}

export class ParameterDescriptor implements IParameterDescriptor {
    index: number
    name?: string
    group?: string
    parameterType?: string
    isInstance?: boolean
    isShared?: boolean
    isReadOnly?: boolean
    flags?: number
    guid?: string
    
    displayUnitIndex?: number
    displayUnit?: IDisplayUnit
    
    static async createFromTable(table: IParameterDescriptorTable, index: number, recursive: boolean = false): Promise<IParameterDescriptor> {
        let result = new ParameterDescriptor()
        result.index = index
        
        await Promise.all([
            table.getName(index).then(v => result.name = v),
            table.getGroup(index).then(v => result.group = v),
            table.getParameterType(index).then(v => result.parameterType = v),
            table.getIsInstance(index).then(v => result.isInstance = v),
            table.getIsShared(index).then(v => result.isShared = v),
            table.getIsReadOnly(index).then(v => result.isReadOnly = v),
            table.getFlags(index).then(v => result.flags = v),
            table.getGuid(index).then(v => result.guid = v),
            table.getDisplayUnitIndex(index).then(v => result.displayUnitIndex = v),
        ])
        
        if (recursive) {
            await Promise.all([
                table.getDisplayUnit(index).then(v => result.displayUnit = v),
            ])
        }
        
        return result
    }
}

export class ParameterDescriptorTable implements IParameterDescriptorTable {
    private document: VimDocument
    private entityTable: EntityTable
    
    static async createFromDocument(document: VimDocument): Promise<IParameterDescriptorTable | undefined> {
        const entity = await document.entities.getBfast("Vim.ParameterDescriptor")
        
        if (!entity) {
            return undefined
        }
        
        let table = new ParameterDescriptorTable()
        table.document = document
        table.entityTable = new EntityTable(entity, document.strings)
        
        return table
    }
    
    async getCount(): Promise<number> {
        return (await this.entityTable.getArray("string:Name"))?.length ?? 0
    }
    
    async get(parameterDescriptorIndex: number, recursive?: boolean): Promise<IParameterDescriptor> {
        return await ParameterDescriptor.createFromTable(this, parameterDescriptorIndex, recursive)
    }
    
    async getAll(): Promise<IParameterDescriptor[]> {
        const localTable = await this.entityTable.getLocal()
        
        let name: string[] | undefined
        let group: string[] | undefined
        let parameterType: string[] | undefined
        let isInstance: boolean[] | undefined
        let isShared: boolean[] | undefined
        let isReadOnly: boolean[] | undefined
        let flags: number[] | undefined
        let guid: string[] | undefined
        let displayUnitIndex: number[] | undefined
        
        await Promise.all([
            localTable.getStringArray("string:Name").then(a => name = a),
            localTable.getStringArray("string:Group").then(a => group = a),
            localTable.getStringArray("string:ParameterType").then(a => parameterType = a),
            localTable.getBooleanArray("byte:IsInstance").then(a => isInstance = a),
            localTable.getBooleanArray("byte:IsShared").then(a => isShared = a),
            localTable.getBooleanArray("byte:IsReadOnly").then(a => isReadOnly = a),
            localTable.getArray("int:Flags").then(a => flags = a),
            localTable.getStringArray("string:Guid").then(a => guid = a),
            localTable.getArray("index:Vim.DisplayUnit:DisplayUnit").then(a => displayUnitIndex = a),
        ])
        
        let parameterDescriptor: IParameterDescriptor[] = []
        
        for (let i = 0; i <= name!.length; i++) {
            parameterDescriptor.push({
                index: i,
                name: name ? name[i] : undefined,
                group: group ? group[i] : undefined,
                parameterType: parameterType ? parameterType[i] : undefined,
                isInstance: isInstance ? isInstance[i] : undefined,
                isShared: isShared ? isShared[i] : undefined,
                isReadOnly: isReadOnly ? isReadOnly[i] : undefined,
                flags: flags ? flags[i] : undefined,
                guid: guid ? guid[i] : undefined,
                displayUnitIndex: displayUnitIndex ? displayUnitIndex[i] : undefined
            })
        }
        
        return parameterDescriptor
    }
    
    async getName(parameterDescriptorIndex: number): Promise<string | undefined>{
        return await this.entityTable.getString(parameterDescriptorIndex, "string:Name")
    }
    
    async getAllName(): Promise<string[] | undefined>{
        return await this.entityTable.getStringArray("string:Name")
    }
    
    async getGroup(parameterDescriptorIndex: number): Promise<string | undefined>{
        return await this.entityTable.getString(parameterDescriptorIndex, "string:Group")
    }
    
    async getAllGroup(): Promise<string[] | undefined>{
        return await this.entityTable.getStringArray("string:Group")
    }
    
    async getParameterType(parameterDescriptorIndex: number): Promise<string | undefined>{
        return await this.entityTable.getString(parameterDescriptorIndex, "string:ParameterType")
    }
    
    async getAllParameterType(): Promise<string[] | undefined>{
        return await this.entityTable.getStringArray("string:ParameterType")
    }
    
    async getIsInstance(parameterDescriptorIndex: number): Promise<boolean | undefined>{
        return await this.entityTable.getBoolean(parameterDescriptorIndex, "byte:IsInstance")
    }
    
    async getAllIsInstance(): Promise<boolean[] | undefined>{
        return await this.entityTable.getBooleanArray("byte:IsInstance")
    }
    
    async getIsShared(parameterDescriptorIndex: number): Promise<boolean | undefined>{
        return await this.entityTable.getBoolean(parameterDescriptorIndex, "byte:IsShared")
    }
    
    async getAllIsShared(): Promise<boolean[] | undefined>{
        return await this.entityTable.getBooleanArray("byte:IsShared")
    }
    
    async getIsReadOnly(parameterDescriptorIndex: number): Promise<boolean | undefined>{
        return await this.entityTable.getBoolean(parameterDescriptorIndex, "byte:IsReadOnly")
    }
    
    async getAllIsReadOnly(): Promise<boolean[] | undefined>{
        return await this.entityTable.getBooleanArray("byte:IsReadOnly")
    }
    
    async getFlags(parameterDescriptorIndex: number): Promise<number | undefined>{
        return await this.entityTable.getNumber(parameterDescriptorIndex, "int:Flags")
    }
    
    async getAllFlags(): Promise<number[] | undefined>{
        return await this.entityTable.getArray("int:Flags")
    }
    
    async getGuid(parameterDescriptorIndex: number): Promise<string | undefined>{
        return await this.entityTable.getString(parameterDescriptorIndex, "string:Guid")
    }
    
    async getAllGuid(): Promise<string[] | undefined>{
        return await this.entityTable.getStringArray("string:Guid")
    }
    
    async getDisplayUnitIndex(parameterDescriptorIndex: number): Promise<number | undefined> {
        return await this.entityTable.getNumber(parameterDescriptorIndex, "index:Vim.DisplayUnit:DisplayUnit")
    }
    
    async getAllDisplayUnitIndex(): Promise<number[] | undefined> {
        return await this.entityTable.getArray("index:Vim.DisplayUnit:DisplayUnit")
    }
    
    async getDisplayUnit(parameterDescriptorIndex: number, recursive?: boolean): Promise<IDisplayUnit | undefined> {
        const index = await this.getDisplayUnitIndex(parameterDescriptorIndex)
        
        if (index === undefined) {
            return undefined
        }
        
        return await this.document.displayUnit?.get(index, recursive)
    }
    
}

export interface IParameter {
    index: number
    value?: string
    
    parameterDescriptorIndex?: number
    parameterDescriptor?: IParameterDescriptor
    elementIndex?: number
    element?: IElement
}

export interface IParameterTable {
    getCount(): Promise<number>
    get(parameterIndex: number, recursive?: boolean): Promise<IParameter>
    getAll(): Promise<IParameter[]>
    
    getValue(parameterIndex: number): Promise<string | undefined>
    getAllValue(): Promise<string[] | undefined>
    
    getParameterDescriptorIndex(parameterIndex: number): Promise<number | undefined>
    getAllParameterDescriptorIndex(): Promise<number[] | undefined>
    getParameterDescriptor(parameterIndex: number, recursive?: boolean): Promise<IParameterDescriptor | undefined>
    getElementIndex(parameterIndex: number): Promise<number | undefined>
    getAllElementIndex(): Promise<number[] | undefined>
    getElement(parameterIndex: number, recursive?: boolean): Promise<IElement | undefined>
}

export class Parameter implements IParameter {
    index: number
    value?: string
    
    parameterDescriptorIndex?: number
    parameterDescriptor?: IParameterDescriptor
    elementIndex?: number
    element?: IElement
    
    static async createFromTable(table: IParameterTable, index: number, recursive: boolean = false): Promise<IParameter> {
        let result = new Parameter()
        result.index = index
        
        await Promise.all([
            table.getValue(index).then(v => result.value = v),
            table.getParameterDescriptorIndex(index).then(v => result.parameterDescriptorIndex = v),
            table.getElementIndex(index).then(v => result.elementIndex = v),
        ])
        
        if (recursive) {
            await Promise.all([
                table.getParameterDescriptor(index).then(v => result.parameterDescriptor = v),
                table.getElement(index).then(v => result.element = v),
            ])
        }
        
        return result
    }
}

export class ParameterTable implements IParameterTable {
    private document: VimDocument
    private entityTable: EntityTable
    
    static async createFromDocument(document: VimDocument): Promise<IParameterTable | undefined> {
        const entity = await document.entities.getBfast("Vim.Parameter")
        
        if (!entity) {
            return undefined
        }
        
        let table = new ParameterTable()
        table.document = document
        table.entityTable = new EntityTable(entity, document.strings)
        
        return table
    }
    
    async getCount(): Promise<number> {
        return (await this.entityTable.getArray("string:Value"))?.length ?? 0
    }
    
    async get(parameterIndex: number, recursive?: boolean): Promise<IParameter> {
        return await Parameter.createFromTable(this, parameterIndex, recursive)
    }
    
    async getAll(): Promise<IParameter[]> {
        const localTable = await this.entityTable.getLocal()
        
        let value: string[] | undefined
        let parameterDescriptorIndex: number[] | undefined
        let elementIndex: number[] | undefined
        
        await Promise.all([
            localTable.getStringArray("string:Value").then(a => value = a),
            localTable.getArray("index:Vim.ParameterDescriptor:ParameterDescriptor").then(a => parameterDescriptorIndex = a),
            localTable.getArray("index:Vim.Element:Element").then(a => elementIndex = a),
        ])
        
        let parameter: IParameter[] = []
        
        for (let i = 0; i <= value!.length; i++) {
            parameter.push({
                index: i,
                value: value ? value[i] : undefined,
                parameterDescriptorIndex: parameterDescriptorIndex ? parameterDescriptorIndex[i] : undefined,
                elementIndex: elementIndex ? elementIndex[i] : undefined
            })
        }
        
        return parameter
    }
    
    async getValue(parameterIndex: number): Promise<string | undefined>{
        return await this.entityTable.getString(parameterIndex, "string:Value")
    }
    
    async getAllValue(): Promise<string[] | undefined>{
        return await this.entityTable.getStringArray("string:Value")
    }
    
    async getParameterDescriptorIndex(parameterIndex: number): Promise<number | undefined> {
        return await this.entityTable.getNumber(parameterIndex, "index:Vim.ParameterDescriptor:ParameterDescriptor")
    }
    
    async getAllParameterDescriptorIndex(): Promise<number[] | undefined> {
        return await this.entityTable.getArray("index:Vim.ParameterDescriptor:ParameterDescriptor")
    }
    
    async getParameterDescriptor(parameterIndex: number, recursive?: boolean): Promise<IParameterDescriptor | undefined> {
        const index = await this.getParameterDescriptorIndex(parameterIndex)
        
        if (index === undefined) {
            return undefined
        }
        
        return await this.document.parameterDescriptor?.get(index, recursive)
    }
    
    async getElementIndex(parameterIndex: number): Promise<number | undefined> {
        return await this.entityTable.getNumber(parameterIndex, "index:Vim.Element:Element")
    }
    
    async getAllElementIndex(): Promise<number[] | undefined> {
        return await this.entityTable.getArray("index:Vim.Element:Element")
    }
    
    async getElement(parameterIndex: number, recursive?: boolean): Promise<IElement | undefined> {
        const index = await this.getElementIndex(parameterIndex)
        
        if (index === undefined) {
            return undefined
        }
        
        return await this.document.element?.get(index, recursive)
    }
    
}

export interface IElement {
    index: number
    id?: number
    type?: string
    name?: string
    uniqueId?: string
    location?: Vector3
    familyName?: string
    isPinned?: boolean
    
    levelIndex?: number
    level?: ILevel
    phaseCreatedIndex?: number
    phaseCreated?: IPhase
    phaseDemolishedIndex?: number
    phaseDemolished?: IPhase
    categoryIndex?: number
    category?: ICategory
    worksetIndex?: number
    workset?: IWorkset
    designOptionIndex?: number
    designOption?: IDesignOption
    ownerViewIndex?: number
    ownerView?: IView
    groupIndex?: number
    group?: IGroup
    assemblyInstanceIndex?: number
    assemblyInstance?: IAssemblyInstance
    bimDocumentIndex?: number
    bimDocument?: IBimDocument
    roomIndex?: number
    room?: IRoom
}

export interface IElementTable {
    getCount(): Promise<number>
    get(elementIndex: number, recursive?: boolean): Promise<IElement>
    getAll(): Promise<IElement[]>
    
    getId(elementIndex: number): Promise<number | undefined>
    getAllId(): Promise<number[] | undefined>
    getType(elementIndex: number): Promise<string | undefined>
    getAllType(): Promise<string[] | undefined>
    getName(elementIndex: number): Promise<string | undefined>
    getAllName(): Promise<string[] | undefined>
    getUniqueId(elementIndex: number): Promise<string | undefined>
    getAllUniqueId(): Promise<string[] | undefined>
    getLocation(elementIndex: number): Promise<Vector3 | undefined>
    getAllLocation(): Promise<Vector3[] | undefined>
    getFamilyName(elementIndex: number): Promise<string | undefined>
    getAllFamilyName(): Promise<string[] | undefined>
    getIsPinned(elementIndex: number): Promise<boolean | undefined>
    getAllIsPinned(): Promise<boolean[] | undefined>
    
    getLevelIndex(elementIndex: number): Promise<number | undefined>
    getAllLevelIndex(): Promise<number[] | undefined>
    getLevel(elementIndex: number, recursive?: boolean): Promise<ILevel | undefined>
    getPhaseCreatedIndex(elementIndex: number): Promise<number | undefined>
    getAllPhaseCreatedIndex(): Promise<number[] | undefined>
    getPhaseCreated(elementIndex: number, recursive?: boolean): Promise<IPhase | undefined>
    getPhaseDemolishedIndex(elementIndex: number): Promise<number | undefined>
    getAllPhaseDemolishedIndex(): Promise<number[] | undefined>
    getPhaseDemolished(elementIndex: number, recursive?: boolean): Promise<IPhase | undefined>
    getCategoryIndex(elementIndex: number): Promise<number | undefined>
    getAllCategoryIndex(): Promise<number[] | undefined>
    getCategory(elementIndex: number, recursive?: boolean): Promise<ICategory | undefined>
    getWorksetIndex(elementIndex: number): Promise<number | undefined>
    getAllWorksetIndex(): Promise<number[] | undefined>
    getWorkset(elementIndex: number, recursive?: boolean): Promise<IWorkset | undefined>
    getDesignOptionIndex(elementIndex: number): Promise<number | undefined>
    getAllDesignOptionIndex(): Promise<number[] | undefined>
    getDesignOption(elementIndex: number, recursive?: boolean): Promise<IDesignOption | undefined>
    getOwnerViewIndex(elementIndex: number): Promise<number | undefined>
    getAllOwnerViewIndex(): Promise<number[] | undefined>
    getOwnerView(elementIndex: number, recursive?: boolean): Promise<IView | undefined>
    getGroupIndex(elementIndex: number): Promise<number | undefined>
    getAllGroupIndex(): Promise<number[] | undefined>
    getGroup(elementIndex: number, recursive?: boolean): Promise<IGroup | undefined>
    getAssemblyInstanceIndex(elementIndex: number): Promise<number | undefined>
    getAllAssemblyInstanceIndex(): Promise<number[] | undefined>
    getAssemblyInstance(elementIndex: number, recursive?: boolean): Promise<IAssemblyInstance | undefined>
    getBimDocumentIndex(elementIndex: number): Promise<number | undefined>
    getAllBimDocumentIndex(): Promise<number[] | undefined>
    getBimDocument(elementIndex: number, recursive?: boolean): Promise<IBimDocument | undefined>
    getRoomIndex(elementIndex: number): Promise<number | undefined>
    getAllRoomIndex(): Promise<number[] | undefined>
    getRoom(elementIndex: number, recursive?: boolean): Promise<IRoom | undefined>
}

export class Element implements IElement {
    index: number
    id?: number
    type?: string
    name?: string
    uniqueId?: string
    location?: Vector3
    familyName?: string
    isPinned?: boolean
    
    levelIndex?: number
    level?: ILevel
    phaseCreatedIndex?: number
    phaseCreated?: IPhase
    phaseDemolishedIndex?: number
    phaseDemolished?: IPhase
    categoryIndex?: number
    category?: ICategory
    worksetIndex?: number
    workset?: IWorkset
    designOptionIndex?: number
    designOption?: IDesignOption
    ownerViewIndex?: number
    ownerView?: IView
    groupIndex?: number
    group?: IGroup
    assemblyInstanceIndex?: number
    assemblyInstance?: IAssemblyInstance
    bimDocumentIndex?: number
    bimDocument?: IBimDocument
    roomIndex?: number
    room?: IRoom
    
    static async createFromTable(table: IElementTable, index: number, recursive: boolean = false): Promise<IElement> {
        let result = new Element()
        result.index = index
        
        await Promise.all([
            table.getId(index).then(v => result.id = v),
            table.getType(index).then(v => result.type = v),
            table.getName(index).then(v => result.name = v),
            table.getUniqueId(index).then(v => result.uniqueId = v),
            table.getLocation(index).then(v => result.location = v),
            table.getFamilyName(index).then(v => result.familyName = v),
            table.getIsPinned(index).then(v => result.isPinned = v),
            table.getLevelIndex(index).then(v => result.levelIndex = v),
            table.getPhaseCreatedIndex(index).then(v => result.phaseCreatedIndex = v),
            table.getPhaseDemolishedIndex(index).then(v => result.phaseDemolishedIndex = v),
            table.getCategoryIndex(index).then(v => result.categoryIndex = v),
            table.getWorksetIndex(index).then(v => result.worksetIndex = v),
            table.getDesignOptionIndex(index).then(v => result.designOptionIndex = v),
            table.getOwnerViewIndex(index).then(v => result.ownerViewIndex = v),
            table.getGroupIndex(index).then(v => result.groupIndex = v),
            table.getAssemblyInstanceIndex(index).then(v => result.assemblyInstanceIndex = v),
            table.getBimDocumentIndex(index).then(v => result.bimDocumentIndex = v),
            table.getRoomIndex(index).then(v => result.roomIndex = v),
        ])
        
        if (recursive) {
            await Promise.all([
                table.getLevel(index).then(v => result.level = v),
                table.getPhaseCreated(index).then(v => result.phaseCreated = v),
                table.getPhaseDemolished(index).then(v => result.phaseDemolished = v),
                table.getCategory(index).then(v => result.category = v),
                table.getWorkset(index).then(v => result.workset = v),
                table.getDesignOption(index).then(v => result.designOption = v),
                table.getOwnerView(index).then(v => result.ownerView = v),
                table.getGroup(index).then(v => result.group = v),
                table.getAssemblyInstance(index).then(v => result.assemblyInstance = v),
                table.getBimDocument(index).then(v => result.bimDocument = v),
                table.getRoom(index).then(v => result.room = v),
            ])
        }
        
        return result
    }
}

export class ElementTable implements IElementTable {
    private document: VimDocument
    private entityTable: EntityTable
    
    static async createFromDocument(document: VimDocument): Promise<IElementTable | undefined> {
        const entity = await document.entities.getBfast("Vim.Element")
        
        if (!entity) {
            return undefined
        }
        
        let table = new ElementTable()
        table.document = document
        table.entityTable = new EntityTable(entity, document.strings)
        
        return table
    }
    
    async getCount(): Promise<number> {
        return (await this.entityTable.getArray("int:Id"))?.length ?? 0
    }
    
    async get(elementIndex: number, recursive?: boolean): Promise<IElement> {
        return await Element.createFromTable(this, elementIndex, recursive)
    }
    
    async getAll(): Promise<IElement[]> {
        const localTable = await this.entityTable.getLocal()
        
        let id: number[] | undefined
        let type: string[] | undefined
        let name: string[] | undefined
        let uniqueId: string[] | undefined
        const locationConverter = new Converters.Vector3Converter()
        let location: Vector3[] | undefined
        let familyName: string[] | undefined
        let isPinned: boolean[] | undefined
        let levelIndex: number[] | undefined
        let phaseCreatedIndex: number[] | undefined
        let phaseDemolishedIndex: number[] | undefined
        let categoryIndex: number[] | undefined
        let worksetIndex: number[] | undefined
        let designOptionIndex: number[] | undefined
        let ownerViewIndex: number[] | undefined
        let groupIndex: number[] | undefined
        let assemblyInstanceIndex: number[] | undefined
        let bimDocumentIndex: number[] | undefined
        let roomIndex: number[] | undefined
        
        await Promise.all([
            localTable.getArray("int:Id").then(a => id = a),
            localTable.getStringArray("string:Type").then(a => type = a),
            localTable.getStringArray("string:Name").then(a => name = a),
            localTable.getStringArray("string:UniqueId").then(a => uniqueId = a),
            Promise.all(locationConverter.columns.map(c => this.entityTable.getArray("float:Location" + c)))
                .then(a => location = Converters.convertArray(locationConverter, a)),
            localTable.getStringArray("string:FamilyName").then(a => familyName = a),
            localTable.getBooleanArray("byte:IsPinned").then(a => isPinned = a),
            localTable.getArray("index:Vim.Level:Level").then(a => levelIndex = a),
            localTable.getArray("index:Vim.Phase:PhaseCreated").then(a => phaseCreatedIndex = a),
            localTable.getArray("index:Vim.Phase:PhaseDemolished").then(a => phaseDemolishedIndex = a),
            localTable.getArray("index:Vim.Category:Category").then(a => categoryIndex = a),
            localTable.getArray("index:Vim.Workset:Workset").then(a => worksetIndex = a),
            localTable.getArray("index:Vim.DesignOption:DesignOption").then(a => designOptionIndex = a),
            localTable.getArray("index:Vim.View:OwnerView").then(a => ownerViewIndex = a),
            localTable.getArray("index:Vim.Group:Group").then(a => groupIndex = a),
            localTable.getArray("index:Vim.AssemblyInstance:AssemblyInstance").then(a => assemblyInstanceIndex = a),
            localTable.getArray("index:Vim.BimDocument:BimDocument").then(a => bimDocumentIndex = a),
            localTable.getArray("index:Vim.Room:Room").then(a => roomIndex = a),
        ])
        
        let element: IElement[] = []
        
        for (let i = 0; i <= id!.length; i++) {
            element.push({
                index: i,
                id: id ? id[i] : undefined,
                type: type ? type[i] : undefined,
                name: name ? name[i] : undefined,
                uniqueId: uniqueId ? uniqueId[i] : undefined,
                location: location ? location[i] : undefined,
                familyName: familyName ? familyName[i] : undefined,
                isPinned: isPinned ? isPinned[i] : undefined,
                levelIndex: levelIndex ? levelIndex[i] : undefined,
                phaseCreatedIndex: phaseCreatedIndex ? phaseCreatedIndex[i] : undefined,
                phaseDemolishedIndex: phaseDemolishedIndex ? phaseDemolishedIndex[i] : undefined,
                categoryIndex: categoryIndex ? categoryIndex[i] : undefined,
                worksetIndex: worksetIndex ? worksetIndex[i] : undefined,
                designOptionIndex: designOptionIndex ? designOptionIndex[i] : undefined,
                ownerViewIndex: ownerViewIndex ? ownerViewIndex[i] : undefined,
                groupIndex: groupIndex ? groupIndex[i] : undefined,
                assemblyInstanceIndex: assemblyInstanceIndex ? assemblyInstanceIndex[i] : undefined,
                bimDocumentIndex: bimDocumentIndex ? bimDocumentIndex[i] : undefined,
                roomIndex: roomIndex ? roomIndex[i] : undefined
            })
        }
        
        return element
    }
    
    async getId(elementIndex: number): Promise<number | undefined>{
        return await this.entityTable.getNumber(elementIndex, "int:Id")
    }
    
    async getAllId(): Promise<number[] | undefined>{
        return await this.entityTable.getArray("int:Id")
    }
    
    async getType(elementIndex: number): Promise<string | undefined>{
        return await this.entityTable.getString(elementIndex, "string:Type")
    }
    
    async getAllType(): Promise<string[] | undefined>{
        return await this.entityTable.getStringArray("string:Type")
    }
    
    async getName(elementIndex: number): Promise<string | undefined>{
        return await this.entityTable.getString(elementIndex, "string:Name")
    }
    
    async getAllName(): Promise<string[] | undefined>{
        return await this.entityTable.getStringArray("string:Name")
    }
    
    async getUniqueId(elementIndex: number): Promise<string | undefined>{
        return await this.entityTable.getString(elementIndex, "string:UniqueId")
    }
    
    async getAllUniqueId(): Promise<string[] | undefined>{
        return await this.entityTable.getStringArray("string:UniqueId")
    }
    
    async getLocation(elementIndex: number): Promise<Vector3 | undefined>{
        const converter = new Converters.Vector3Converter()
        
        let numbers = await Promise.all(converter.columns.map(c => this.entityTable.getNumber(elementIndex, "float:Location" + c)))
        
        return Converters.convert(converter, numbers)
    }
    
    async getAllLocation(): Promise<Vector3[] | undefined>{
        const converter = new Converters.Vector3Converter()
        
        let numbers = await Promise.all(converter.columns.map(c => this.entityTable.getArray("float:Location" + c)))
        
        return Converters.convertArray(converter, numbers)
    }
    
    async getFamilyName(elementIndex: number): Promise<string | undefined>{
        return await this.entityTable.getString(elementIndex, "string:FamilyName")
    }
    
    async getAllFamilyName(): Promise<string[] | undefined>{
        return await this.entityTable.getStringArray("string:FamilyName")
    }
    
    async getIsPinned(elementIndex: number): Promise<boolean | undefined>{
        return await this.entityTable.getBoolean(elementIndex, "byte:IsPinned")
    }
    
    async getAllIsPinned(): Promise<boolean[] | undefined>{
        return await this.entityTable.getBooleanArray("byte:IsPinned")
    }
    
    async getLevelIndex(elementIndex: number): Promise<number | undefined> {
        return await this.entityTable.getNumber(elementIndex, "index:Vim.Level:Level")
    }
    
    async getAllLevelIndex(): Promise<number[] | undefined> {
        return await this.entityTable.getArray("index:Vim.Level:Level")
    }
    
    async getLevel(elementIndex: number, recursive?: boolean): Promise<ILevel | undefined> {
        const index = await this.getLevelIndex(elementIndex)
        
        if (index === undefined) {
            return undefined
        }
        
        return await this.document.level?.get(index, recursive)
    }
    
    async getPhaseCreatedIndex(elementIndex: number): Promise<number | undefined> {
        return await this.entityTable.getNumber(elementIndex, "index:Vim.Phase:PhaseCreated")
    }
    
    async getAllPhaseCreatedIndex(): Promise<number[] | undefined> {
        return await this.entityTable.getArray("index:Vim.Phase:PhaseCreated")
    }
    
    async getPhaseCreated(elementIndex: number, recursive?: boolean): Promise<IPhase | undefined> {
        const index = await this.getPhaseCreatedIndex(elementIndex)
        
        if (index === undefined) {
            return undefined
        }
        
        return await this.document.phase?.get(index, recursive)
    }
    
    async getPhaseDemolishedIndex(elementIndex: number): Promise<number | undefined> {
        return await this.entityTable.getNumber(elementIndex, "index:Vim.Phase:PhaseDemolished")
    }
    
    async getAllPhaseDemolishedIndex(): Promise<number[] | undefined> {
        return await this.entityTable.getArray("index:Vim.Phase:PhaseDemolished")
    }
    
    async getPhaseDemolished(elementIndex: number, recursive?: boolean): Promise<IPhase | undefined> {
        const index = await this.getPhaseDemolishedIndex(elementIndex)
        
        if (index === undefined) {
            return undefined
        }
        
        return await this.document.phase?.get(index, recursive)
    }
    
    async getCategoryIndex(elementIndex: number): Promise<number | undefined> {
        return await this.entityTable.getNumber(elementIndex, "index:Vim.Category:Category")
    }
    
    async getAllCategoryIndex(): Promise<number[] | undefined> {
        return await this.entityTable.getArray("index:Vim.Category:Category")
    }
    
    async getCategory(elementIndex: number, recursive?: boolean): Promise<ICategory | undefined> {
        const index = await this.getCategoryIndex(elementIndex)
        
        if (index === undefined) {
            return undefined
        }
        
        return await this.document.category?.get(index, recursive)
    }
    
    async getWorksetIndex(elementIndex: number): Promise<number | undefined> {
        return await this.entityTable.getNumber(elementIndex, "index:Vim.Workset:Workset")
    }
    
    async getAllWorksetIndex(): Promise<number[] | undefined> {
        return await this.entityTable.getArray("index:Vim.Workset:Workset")
    }
    
    async getWorkset(elementIndex: number, recursive?: boolean): Promise<IWorkset | undefined> {
        const index = await this.getWorksetIndex(elementIndex)
        
        if (index === undefined) {
            return undefined
        }
        
        return await this.document.workset?.get(index, recursive)
    }
    
    async getDesignOptionIndex(elementIndex: number): Promise<number | undefined> {
        return await this.entityTable.getNumber(elementIndex, "index:Vim.DesignOption:DesignOption")
    }
    
    async getAllDesignOptionIndex(): Promise<number[] | undefined> {
        return await this.entityTable.getArray("index:Vim.DesignOption:DesignOption")
    }
    
    async getDesignOption(elementIndex: number, recursive?: boolean): Promise<IDesignOption | undefined> {
        const index = await this.getDesignOptionIndex(elementIndex)
        
        if (index === undefined) {
            return undefined
        }
        
        return await this.document.designOption?.get(index, recursive)
    }
    
    async getOwnerViewIndex(elementIndex: number): Promise<number | undefined> {
        return await this.entityTable.getNumber(elementIndex, "index:Vim.View:OwnerView")
    }
    
    async getAllOwnerViewIndex(): Promise<number[] | undefined> {
        return await this.entityTable.getArray("index:Vim.View:OwnerView")
    }
    
    async getOwnerView(elementIndex: number, recursive?: boolean): Promise<IView | undefined> {
        const index = await this.getOwnerViewIndex(elementIndex)
        
        if (index === undefined) {
            return undefined
        }
        
        return await this.document.view?.get(index, recursive)
    }
    
    async getGroupIndex(elementIndex: number): Promise<number | undefined> {
        return await this.entityTable.getNumber(elementIndex, "index:Vim.Group:Group")
    }
    
    async getAllGroupIndex(): Promise<number[] | undefined> {
        return await this.entityTable.getArray("index:Vim.Group:Group")
    }
    
    async getGroup(elementIndex: number, recursive?: boolean): Promise<IGroup | undefined> {
        const index = await this.getGroupIndex(elementIndex)
        
        if (index === undefined) {
            return undefined
        }
        
        return await this.document.group?.get(index, recursive)
    }
    
    async getAssemblyInstanceIndex(elementIndex: number): Promise<number | undefined> {
        return await this.entityTable.getNumber(elementIndex, "index:Vim.AssemblyInstance:AssemblyInstance")
    }
    
    async getAllAssemblyInstanceIndex(): Promise<number[] | undefined> {
        return await this.entityTable.getArray("index:Vim.AssemblyInstance:AssemblyInstance")
    }
    
    async getAssemblyInstance(elementIndex: number, recursive?: boolean): Promise<IAssemblyInstance | undefined> {
        const index = await this.getAssemblyInstanceIndex(elementIndex)
        
        if (index === undefined) {
            return undefined
        }
        
        return await this.document.assemblyInstance?.get(index, recursive)
    }
    
    async getBimDocumentIndex(elementIndex: number): Promise<number | undefined> {
        return await this.entityTable.getNumber(elementIndex, "index:Vim.BimDocument:BimDocument")
    }
    
    async getAllBimDocumentIndex(): Promise<number[] | undefined> {
        return await this.entityTable.getArray("index:Vim.BimDocument:BimDocument")
    }
    
    async getBimDocument(elementIndex: number, recursive?: boolean): Promise<IBimDocument | undefined> {
        const index = await this.getBimDocumentIndex(elementIndex)
        
        if (index === undefined) {
            return undefined
        }
        
        return await this.document.bimDocument?.get(index, recursive)
    }
    
    async getRoomIndex(elementIndex: number): Promise<number | undefined> {
        return await this.entityTable.getNumber(elementIndex, "index:Vim.Room:Room")
    }
    
    async getAllRoomIndex(): Promise<number[] | undefined> {
        return await this.entityTable.getArray("index:Vim.Room:Room")
    }
    
    async getRoom(elementIndex: number, recursive?: boolean): Promise<IRoom | undefined> {
        const index = await this.getRoomIndex(elementIndex)
        
        if (index === undefined) {
            return undefined
        }
        
        return await this.document.room?.get(index, recursive)
    }
    
}

export interface IWorkset {
    index: number
    id?: number
    name?: string
    kind?: string
    isOpen?: boolean
    isEditable?: boolean
    owner?: string
    uniqueId?: string
    
    bimDocumentIndex?: number
    bimDocument?: IBimDocument
}

export interface IWorksetTable {
    getCount(): Promise<number>
    get(worksetIndex: number, recursive?: boolean): Promise<IWorkset>
    getAll(): Promise<IWorkset[]>
    
    getId(worksetIndex: number): Promise<number | undefined>
    getAllId(): Promise<number[] | undefined>
    getName(worksetIndex: number): Promise<string | undefined>
    getAllName(): Promise<string[] | undefined>
    getKind(worksetIndex: number): Promise<string | undefined>
    getAllKind(): Promise<string[] | undefined>
    getIsOpen(worksetIndex: number): Promise<boolean | undefined>
    getAllIsOpen(): Promise<boolean[] | undefined>
    getIsEditable(worksetIndex: number): Promise<boolean | undefined>
    getAllIsEditable(): Promise<boolean[] | undefined>
    getOwner(worksetIndex: number): Promise<string | undefined>
    getAllOwner(): Promise<string[] | undefined>
    getUniqueId(worksetIndex: number): Promise<string | undefined>
    getAllUniqueId(): Promise<string[] | undefined>
    
    getBimDocumentIndex(worksetIndex: number): Promise<number | undefined>
    getAllBimDocumentIndex(): Promise<number[] | undefined>
    getBimDocument(worksetIndex: number, recursive?: boolean): Promise<IBimDocument | undefined>
}

export class Workset implements IWorkset {
    index: number
    id?: number
    name?: string
    kind?: string
    isOpen?: boolean
    isEditable?: boolean
    owner?: string
    uniqueId?: string
    
    bimDocumentIndex?: number
    bimDocument?: IBimDocument
    
    static async createFromTable(table: IWorksetTable, index: number, recursive: boolean = false): Promise<IWorkset> {
        let result = new Workset()
        result.index = index
        
        await Promise.all([
            table.getId(index).then(v => result.id = v),
            table.getName(index).then(v => result.name = v),
            table.getKind(index).then(v => result.kind = v),
            table.getIsOpen(index).then(v => result.isOpen = v),
            table.getIsEditable(index).then(v => result.isEditable = v),
            table.getOwner(index).then(v => result.owner = v),
            table.getUniqueId(index).then(v => result.uniqueId = v),
            table.getBimDocumentIndex(index).then(v => result.bimDocumentIndex = v),
        ])
        
        if (recursive) {
            await Promise.all([
                table.getBimDocument(index).then(v => result.bimDocument = v),
            ])
        }
        
        return result
    }
}

export class WorksetTable implements IWorksetTable {
    private document: VimDocument
    private entityTable: EntityTable
    
    static async createFromDocument(document: VimDocument): Promise<IWorksetTable | undefined> {
        const entity = await document.entities.getBfast("Vim.Workset")
        
        if (!entity) {
            return undefined
        }
        
        let table = new WorksetTable()
        table.document = document
        table.entityTable = new EntityTable(entity, document.strings)
        
        return table
    }
    
    async getCount(): Promise<number> {
        return (await this.entityTable.getArray("int:Id"))?.length ?? 0
    }
    
    async get(worksetIndex: number, recursive?: boolean): Promise<IWorkset> {
        return await Workset.createFromTable(this, worksetIndex, recursive)
    }
    
    async getAll(): Promise<IWorkset[]> {
        const localTable = await this.entityTable.getLocal()
        
        let id: number[] | undefined
        let name: string[] | undefined
        let kind: string[] | undefined
        let isOpen: boolean[] | undefined
        let isEditable: boolean[] | undefined
        let owner: string[] | undefined
        let uniqueId: string[] | undefined
        let bimDocumentIndex: number[] | undefined
        
        await Promise.all([
            localTable.getArray("int:Id").then(a => id = a),
            localTable.getStringArray("string:Name").then(a => name = a),
            localTable.getStringArray("string:Kind").then(a => kind = a),
            localTable.getBooleanArray("byte:IsOpen").then(a => isOpen = a),
            localTable.getBooleanArray("byte:IsEditable").then(a => isEditable = a),
            localTable.getStringArray("string:Owner").then(a => owner = a),
            localTable.getStringArray("string:UniqueId").then(a => uniqueId = a),
            localTable.getArray("index:Vim.BimDocument:BimDocument").then(a => bimDocumentIndex = a),
        ])
        
        let workset: IWorkset[] = []
        
        for (let i = 0; i <= id!.length; i++) {
            workset.push({
                index: i,
                id: id ? id[i] : undefined,
                name: name ? name[i] : undefined,
                kind: kind ? kind[i] : undefined,
                isOpen: isOpen ? isOpen[i] : undefined,
                isEditable: isEditable ? isEditable[i] : undefined,
                owner: owner ? owner[i] : undefined,
                uniqueId: uniqueId ? uniqueId[i] : undefined,
                bimDocumentIndex: bimDocumentIndex ? bimDocumentIndex[i] : undefined
            })
        }
        
        return workset
    }
    
    async getId(worksetIndex: number): Promise<number | undefined>{
        return await this.entityTable.getNumber(worksetIndex, "int:Id")
    }
    
    async getAllId(): Promise<number[] | undefined>{
        return await this.entityTable.getArray("int:Id")
    }
    
    async getName(worksetIndex: number): Promise<string | undefined>{
        return await this.entityTable.getString(worksetIndex, "string:Name")
    }
    
    async getAllName(): Promise<string[] | undefined>{
        return await this.entityTable.getStringArray("string:Name")
    }
    
    async getKind(worksetIndex: number): Promise<string | undefined>{
        return await this.entityTable.getString(worksetIndex, "string:Kind")
    }
    
    async getAllKind(): Promise<string[] | undefined>{
        return await this.entityTable.getStringArray("string:Kind")
    }
    
    async getIsOpen(worksetIndex: number): Promise<boolean | undefined>{
        return await this.entityTable.getBoolean(worksetIndex, "byte:IsOpen")
    }
    
    async getAllIsOpen(): Promise<boolean[] | undefined>{
        return await this.entityTable.getBooleanArray("byte:IsOpen")
    }
    
    async getIsEditable(worksetIndex: number): Promise<boolean | undefined>{
        return await this.entityTable.getBoolean(worksetIndex, "byte:IsEditable")
    }
    
    async getAllIsEditable(): Promise<boolean[] | undefined>{
        return await this.entityTable.getBooleanArray("byte:IsEditable")
    }
    
    async getOwner(worksetIndex: number): Promise<string | undefined>{
        return await this.entityTable.getString(worksetIndex, "string:Owner")
    }
    
    async getAllOwner(): Promise<string[] | undefined>{
        return await this.entityTable.getStringArray("string:Owner")
    }
    
    async getUniqueId(worksetIndex: number): Promise<string | undefined>{
        return await this.entityTable.getString(worksetIndex, "string:UniqueId")
    }
    
    async getAllUniqueId(): Promise<string[] | undefined>{
        return await this.entityTable.getStringArray("string:UniqueId")
    }
    
    async getBimDocumentIndex(worksetIndex: number): Promise<number | undefined> {
        return await this.entityTable.getNumber(worksetIndex, "index:Vim.BimDocument:BimDocument")
    }
    
    async getAllBimDocumentIndex(): Promise<number[] | undefined> {
        return await this.entityTable.getArray("index:Vim.BimDocument:BimDocument")
    }
    
    async getBimDocument(worksetIndex: number, recursive?: boolean): Promise<IBimDocument | undefined> {
        const index = await this.getBimDocumentIndex(worksetIndex)
        
        if (index === undefined) {
            return undefined
        }
        
        return await this.document.bimDocument?.get(index, recursive)
    }
    
}

export interface IAssemblyInstance {
    index: number
    assemblyTypeName?: string
    position?: Vector3
    
    elementIndex?: number
    element?: IElement
}

export interface IAssemblyInstanceTable {
    getCount(): Promise<number>
    get(assemblyInstanceIndex: number, recursive?: boolean): Promise<IAssemblyInstance>
    getAll(): Promise<IAssemblyInstance[]>
    
    getAssemblyTypeName(assemblyInstanceIndex: number): Promise<string | undefined>
    getAllAssemblyTypeName(): Promise<string[] | undefined>
    getPosition(assemblyInstanceIndex: number): Promise<Vector3 | undefined>
    getAllPosition(): Promise<Vector3[] | undefined>
    
    getElementIndex(assemblyInstanceIndex: number): Promise<number | undefined>
    getAllElementIndex(): Promise<number[] | undefined>
    getElement(assemblyInstanceIndex: number, recursive?: boolean): Promise<IElement | undefined>
}

export class AssemblyInstance implements IAssemblyInstance {
    index: number
    assemblyTypeName?: string
    position?: Vector3
    
    elementIndex?: number
    element?: IElement
    
    static async createFromTable(table: IAssemblyInstanceTable, index: number, recursive: boolean = false): Promise<IAssemblyInstance> {
        let result = new AssemblyInstance()
        result.index = index
        
        await Promise.all([
            table.getAssemblyTypeName(index).then(v => result.assemblyTypeName = v),
            table.getPosition(index).then(v => result.position = v),
            table.getElementIndex(index).then(v => result.elementIndex = v),
        ])
        
        if (recursive) {
            await Promise.all([
                table.getElement(index).then(v => result.element = v),
            ])
        }
        
        return result
    }
}

export class AssemblyInstanceTable implements IAssemblyInstanceTable {
    private document: VimDocument
    private entityTable: EntityTable
    
    static async createFromDocument(document: VimDocument): Promise<IAssemblyInstanceTable | undefined> {
        const entity = await document.entities.getBfast("Vim.AssemblyInstance")
        
        if (!entity) {
            return undefined
        }
        
        let table = new AssemblyInstanceTable()
        table.document = document
        table.entityTable = new EntityTable(entity, document.strings)
        
        return table
    }
    
    async getCount(): Promise<number> {
        return (await this.entityTable.getArray("string:AssemblyTypeName"))?.length ?? 0
    }
    
    async get(assemblyInstanceIndex: number, recursive?: boolean): Promise<IAssemblyInstance> {
        return await AssemblyInstance.createFromTable(this, assemblyInstanceIndex, recursive)
    }
    
    async getAll(): Promise<IAssemblyInstance[]> {
        const localTable = await this.entityTable.getLocal()
        
        let assemblyTypeName: string[] | undefined
        const positionConverter = new Converters.Vector3Converter()
        let position: Vector3[] | undefined
        let elementIndex: number[] | undefined
        
        await Promise.all([
            localTable.getStringArray("string:AssemblyTypeName").then(a => assemblyTypeName = a),
            Promise.all(positionConverter.columns.map(c => this.entityTable.getArray("float:Position" + c)))
                .then(a => position = Converters.convertArray(positionConverter, a)),
            localTable.getArray("index:Vim.Element:Element").then(a => elementIndex = a),
        ])
        
        let assemblyInstance: IAssemblyInstance[] = []
        
        for (let i = 0; i <= assemblyTypeName!.length; i++) {
            assemblyInstance.push({
                index: i,
                assemblyTypeName: assemblyTypeName ? assemblyTypeName[i] : undefined,
                position: position ? position[i] : undefined,
                elementIndex: elementIndex ? elementIndex[i] : undefined
            })
        }
        
        return assemblyInstance
    }
    
    async getAssemblyTypeName(assemblyInstanceIndex: number): Promise<string | undefined>{
        return await this.entityTable.getString(assemblyInstanceIndex, "string:AssemblyTypeName")
    }
    
    async getAllAssemblyTypeName(): Promise<string[] | undefined>{
        return await this.entityTable.getStringArray("string:AssemblyTypeName")
    }
    
    async getPosition(assemblyInstanceIndex: number): Promise<Vector3 | undefined>{
        const converter = new Converters.Vector3Converter()
        
        let numbers = await Promise.all(converter.columns.map(c => this.entityTable.getNumber(assemblyInstanceIndex, "float:Position" + c)))
        
        return Converters.convert(converter, numbers)
    }
    
    async getAllPosition(): Promise<Vector3[] | undefined>{
        const converter = new Converters.Vector3Converter()
        
        let numbers = await Promise.all(converter.columns.map(c => this.entityTable.getArray("float:Position" + c)))
        
        return Converters.convertArray(converter, numbers)
    }
    
    async getElementIndex(assemblyInstanceIndex: number): Promise<number | undefined> {
        return await this.entityTable.getNumber(assemblyInstanceIndex, "index:Vim.Element:Element")
    }
    
    async getAllElementIndex(): Promise<number[] | undefined> {
        return await this.entityTable.getArray("index:Vim.Element:Element")
    }
    
    async getElement(assemblyInstanceIndex: number, recursive?: boolean): Promise<IElement | undefined> {
        const index = await this.getElementIndex(assemblyInstanceIndex)
        
        if (index === undefined) {
            return undefined
        }
        
        return await this.document.element?.get(index, recursive)
    }
    
}

export interface IGroup {
    index: number
    groupType?: string
    position?: Vector3
    
    elementIndex?: number
    element?: IElement
}

export interface IGroupTable {
    getCount(): Promise<number>
    get(groupIndex: number, recursive?: boolean): Promise<IGroup>
    getAll(): Promise<IGroup[]>
    
    getGroupType(groupIndex: number): Promise<string | undefined>
    getAllGroupType(): Promise<string[] | undefined>
    getPosition(groupIndex: number): Promise<Vector3 | undefined>
    getAllPosition(): Promise<Vector3[] | undefined>
    
    getElementIndex(groupIndex: number): Promise<number | undefined>
    getAllElementIndex(): Promise<number[] | undefined>
    getElement(groupIndex: number, recursive?: boolean): Promise<IElement | undefined>
}

export class Group implements IGroup {
    index: number
    groupType?: string
    position?: Vector3
    
    elementIndex?: number
    element?: IElement
    
    static async createFromTable(table: IGroupTable, index: number, recursive: boolean = false): Promise<IGroup> {
        let result = new Group()
        result.index = index
        
        await Promise.all([
            table.getGroupType(index).then(v => result.groupType = v),
            table.getPosition(index).then(v => result.position = v),
            table.getElementIndex(index).then(v => result.elementIndex = v),
        ])
        
        if (recursive) {
            await Promise.all([
                table.getElement(index).then(v => result.element = v),
            ])
        }
        
        return result
    }
}

export class GroupTable implements IGroupTable {
    private document: VimDocument
    private entityTable: EntityTable
    
    static async createFromDocument(document: VimDocument): Promise<IGroupTable | undefined> {
        const entity = await document.entities.getBfast("Vim.Group")
        
        if (!entity) {
            return undefined
        }
        
        let table = new GroupTable()
        table.document = document
        table.entityTable = new EntityTable(entity, document.strings)
        
        return table
    }
    
    async getCount(): Promise<number> {
        return (await this.entityTable.getArray("string:GroupType"))?.length ?? 0
    }
    
    async get(groupIndex: number, recursive?: boolean): Promise<IGroup> {
        return await Group.createFromTable(this, groupIndex, recursive)
    }
    
    async getAll(): Promise<IGroup[]> {
        const localTable = await this.entityTable.getLocal()
        
        let groupType: string[] | undefined
        const positionConverter = new Converters.Vector3Converter()
        let position: Vector3[] | undefined
        let elementIndex: number[] | undefined
        
        await Promise.all([
            localTable.getStringArray("string:GroupType").then(a => groupType = a),
            Promise.all(positionConverter.columns.map(c => this.entityTable.getArray("float:Position" + c)))
                .then(a => position = Converters.convertArray(positionConverter, a)),
            localTable.getArray("index:Vim.Element:Element").then(a => elementIndex = a),
        ])
        
        let group: IGroup[] = []
        
        for (let i = 0; i <= groupType!.length; i++) {
            group.push({
                index: i,
                groupType: groupType ? groupType[i] : undefined,
                position: position ? position[i] : undefined,
                elementIndex: elementIndex ? elementIndex[i] : undefined
            })
        }
        
        return group
    }
    
    async getGroupType(groupIndex: number): Promise<string | undefined>{
        return await this.entityTable.getString(groupIndex, "string:GroupType")
    }
    
    async getAllGroupType(): Promise<string[] | undefined>{
        return await this.entityTable.getStringArray("string:GroupType")
    }
    
    async getPosition(groupIndex: number): Promise<Vector3 | undefined>{
        const converter = new Converters.Vector3Converter()
        
        let numbers = await Promise.all(converter.columns.map(c => this.entityTable.getNumber(groupIndex, "float:Position" + c)))
        
        return Converters.convert(converter, numbers)
    }
    
    async getAllPosition(): Promise<Vector3[] | undefined>{
        const converter = new Converters.Vector3Converter()
        
        let numbers = await Promise.all(converter.columns.map(c => this.entityTable.getArray("float:Position" + c)))
        
        return Converters.convertArray(converter, numbers)
    }
    
    async getElementIndex(groupIndex: number): Promise<number | undefined> {
        return await this.entityTable.getNumber(groupIndex, "index:Vim.Element:Element")
    }
    
    async getAllElementIndex(): Promise<number[] | undefined> {
        return await this.entityTable.getArray("index:Vim.Element:Element")
    }
    
    async getElement(groupIndex: number, recursive?: boolean): Promise<IElement | undefined> {
        const index = await this.getElementIndex(groupIndex)
        
        if (index === undefined) {
            return undefined
        }
        
        return await this.document.element?.get(index, recursive)
    }
    
}

export interface IDesignOption {
    index: number
    isPrimary?: boolean
    
    elementIndex?: number
    element?: IElement
}

export interface IDesignOptionTable {
    getCount(): Promise<number>
    get(designOptionIndex: number, recursive?: boolean): Promise<IDesignOption>
    getAll(): Promise<IDesignOption[]>
    
    getIsPrimary(designOptionIndex: number): Promise<boolean | undefined>
    getAllIsPrimary(): Promise<boolean[] | undefined>
    
    getElementIndex(designOptionIndex: number): Promise<number | undefined>
    getAllElementIndex(): Promise<number[] | undefined>
    getElement(designOptionIndex: number, recursive?: boolean): Promise<IElement | undefined>
}

export class DesignOption implements IDesignOption {
    index: number
    isPrimary?: boolean
    
    elementIndex?: number
    element?: IElement
    
    static async createFromTable(table: IDesignOptionTable, index: number, recursive: boolean = false): Promise<IDesignOption> {
        let result = new DesignOption()
        result.index = index
        
        await Promise.all([
            table.getIsPrimary(index).then(v => result.isPrimary = v),
            table.getElementIndex(index).then(v => result.elementIndex = v),
        ])
        
        if (recursive) {
            await Promise.all([
                table.getElement(index).then(v => result.element = v),
            ])
        }
        
        return result
    }
}

export class DesignOptionTable implements IDesignOptionTable {
    private document: VimDocument
    private entityTable: EntityTable
    
    static async createFromDocument(document: VimDocument): Promise<IDesignOptionTable | undefined> {
        const entity = await document.entities.getBfast("Vim.DesignOption")
        
        if (!entity) {
            return undefined
        }
        
        let table = new DesignOptionTable()
        table.document = document
        table.entityTable = new EntityTable(entity, document.strings)
        
        return table
    }
    
    async getCount(): Promise<number> {
        return (await this.entityTable.getArray("byte:IsPrimary"))?.length ?? 0
    }
    
    async get(designOptionIndex: number, recursive?: boolean): Promise<IDesignOption> {
        return await DesignOption.createFromTable(this, designOptionIndex, recursive)
    }
    
    async getAll(): Promise<IDesignOption[]> {
        const localTable = await this.entityTable.getLocal()
        
        let isPrimary: boolean[] | undefined
        let elementIndex: number[] | undefined
        
        await Promise.all([
            localTable.getBooleanArray("byte:IsPrimary").then(a => isPrimary = a),
            localTable.getArray("index:Vim.Element:Element").then(a => elementIndex = a),
        ])
        
        let designOption: IDesignOption[] = []
        
        for (let i = 0; i <= isPrimary!.length; i++) {
            designOption.push({
                index: i,
                isPrimary: isPrimary ? isPrimary[i] : undefined,
                elementIndex: elementIndex ? elementIndex[i] : undefined
            })
        }
        
        return designOption
    }
    
    async getIsPrimary(designOptionIndex: number): Promise<boolean | undefined>{
        return await this.entityTable.getBoolean(designOptionIndex, "byte:IsPrimary")
    }
    
    async getAllIsPrimary(): Promise<boolean[] | undefined>{
        return await this.entityTable.getBooleanArray("byte:IsPrimary")
    }
    
    async getElementIndex(designOptionIndex: number): Promise<number | undefined> {
        return await this.entityTable.getNumber(designOptionIndex, "index:Vim.Element:Element")
    }
    
    async getAllElementIndex(): Promise<number[] | undefined> {
        return await this.entityTable.getArray("index:Vim.Element:Element")
    }
    
    async getElement(designOptionIndex: number, recursive?: boolean): Promise<IElement | undefined> {
        const index = await this.getElementIndex(designOptionIndex)
        
        if (index === undefined) {
            return undefined
        }
        
        return await this.document.element?.get(index, recursive)
    }
    
}

export interface ILevel {
    index: number
    elevation?: number
    
    elementIndex?: number
    element?: IElement
}

export interface ILevelTable {
    getCount(): Promise<number>
    get(levelIndex: number, recursive?: boolean): Promise<ILevel>
    getAll(): Promise<ILevel[]>
    
    getElevation(levelIndex: number): Promise<number | undefined>
    getAllElevation(): Promise<number[] | undefined>
    
    getElementIndex(levelIndex: number): Promise<number | undefined>
    getAllElementIndex(): Promise<number[] | undefined>
    getElement(levelIndex: number, recursive?: boolean): Promise<IElement | undefined>
}

export class Level implements ILevel {
    index: number
    elevation?: number
    
    elementIndex?: number
    element?: IElement
    
    static async createFromTable(table: ILevelTable, index: number, recursive: boolean = false): Promise<ILevel> {
        let result = new Level()
        result.index = index
        
        await Promise.all([
            table.getElevation(index).then(v => result.elevation = v),
            table.getElementIndex(index).then(v => result.elementIndex = v),
        ])
        
        if (recursive) {
            await Promise.all([
                table.getElement(index).then(v => result.element = v),
            ])
        }
        
        return result
    }
}

export class LevelTable implements ILevelTable {
    private document: VimDocument
    private entityTable: EntityTable
    
    static async createFromDocument(document: VimDocument): Promise<ILevelTable | undefined> {
        const entity = await document.entities.getBfast("Vim.Level")
        
        if (!entity) {
            return undefined
        }
        
        let table = new LevelTable()
        table.document = document
        table.entityTable = new EntityTable(entity, document.strings)
        
        return table
    }
    
    async getCount(): Promise<number> {
        return (await this.entityTable.getArray("double:Elevation"))?.length ?? 0
    }
    
    async get(levelIndex: number, recursive?: boolean): Promise<ILevel> {
        return await Level.createFromTable(this, levelIndex, recursive)
    }
    
    async getAll(): Promise<ILevel[]> {
        const localTable = await this.entityTable.getLocal()
        
        let elevation: number[] | undefined
        let elementIndex: number[] | undefined
        
        await Promise.all([
            localTable.getArray("double:Elevation").then(a => elevation = a),
            localTable.getArray("index:Vim.Element:Element").then(a => elementIndex = a),
        ])
        
        let level: ILevel[] = []
        
        for (let i = 0; i <= elevation!.length; i++) {
            level.push({
                index: i,
                elevation: elevation ? elevation[i] : undefined,
                elementIndex: elementIndex ? elementIndex[i] : undefined
            })
        }
        
        return level
    }
    
    async getElevation(levelIndex: number): Promise<number | undefined>{
        return await this.entityTable.getNumber(levelIndex, "double:Elevation")
    }
    
    async getAllElevation(): Promise<number[] | undefined>{
        return await this.entityTable.getArray("double:Elevation")
    }
    
    async getElementIndex(levelIndex: number): Promise<number | undefined> {
        return await this.entityTable.getNumber(levelIndex, "index:Vim.Element:Element")
    }
    
    async getAllElementIndex(): Promise<number[] | undefined> {
        return await this.entityTable.getArray("index:Vim.Element:Element")
    }
    
    async getElement(levelIndex: number, recursive?: boolean): Promise<IElement | undefined> {
        const index = await this.getElementIndex(levelIndex)
        
        if (index === undefined) {
            return undefined
        }
        
        return await this.document.element?.get(index, recursive)
    }
    
}

export interface IPhase {
    index: number
    
    elementIndex?: number
    element?: IElement
}

export interface IPhaseTable {
    getCount(): Promise<number>
    get(phaseIndex: number, recursive?: boolean): Promise<IPhase>
    getAll(): Promise<IPhase[]>
    
    getElementIndex(phaseIndex: number): Promise<number | undefined>
    getAllElementIndex(): Promise<number[] | undefined>
    getElement(phaseIndex: number, recursive?: boolean): Promise<IElement | undefined>
}

export class Phase implements IPhase {
    index: number
    
    elementIndex?: number
    element?: IElement
    
    static async createFromTable(table: IPhaseTable, index: number, recursive: boolean = false): Promise<IPhase> {
        let result = new Phase()
        result.index = index
        
        await Promise.all([
            table.getElementIndex(index).then(v => result.elementIndex = v),
        ])
        
        if (recursive) {
            await Promise.all([
                table.getElement(index).then(v => result.element = v),
            ])
        }
        
        return result
    }
}

export class PhaseTable implements IPhaseTable {
    private document: VimDocument
    private entityTable: EntityTable
    
    static async createFromDocument(document: VimDocument): Promise<IPhaseTable | undefined> {
        const entity = await document.entities.getBfast("Vim.Phase")
        
        if (!entity) {
            return undefined
        }
        
        let table = new PhaseTable()
        table.document = document
        table.entityTable = new EntityTable(entity, document.strings)
        
        return table
    }
    
    async getCount(): Promise<number> {
        return (await this.entityTable.getArray("index:Vim.Element:Element"))?.length ?? 0
    }
    
    async get(phaseIndex: number, recursive?: boolean): Promise<IPhase> {
        return await Phase.createFromTable(this, phaseIndex, recursive)
    }
    
    async getAll(): Promise<IPhase[]> {
        const localTable = await this.entityTable.getLocal()
        
        let elementIndex: number[] | undefined
        
        await Promise.all([
            localTable.getArray("index:Vim.Element:Element").then(a => elementIndex = a),
        ])
        
        let phase: IPhase[] = []
        
        for (let i = 0; i <= elementIndex!.length; i++) {
            phase.push({
                index: i,
                elementIndex: elementIndex ? elementIndex[i] : undefined
            })
        }
        
        return phase
    }
    
    async getElementIndex(phaseIndex: number): Promise<number | undefined> {
        return await this.entityTable.getNumber(phaseIndex, "index:Vim.Element:Element")
    }
    
    async getAllElementIndex(): Promise<number[] | undefined> {
        return await this.entityTable.getArray("index:Vim.Element:Element")
    }
    
    async getElement(phaseIndex: number, recursive?: boolean): Promise<IElement | undefined> {
        const index = await this.getElementIndex(phaseIndex)
        
        if (index === undefined) {
            return undefined
        }
        
        return await this.document.element?.get(index, recursive)
    }
    
}

export interface IRoom {
    index: number
    baseOffset?: number
    limitOffset?: number
    unboundedHeight?: number
    volume?: number
    perimeter?: number
    area?: number
    number?: string
    
    upperLimitIndex?: number
    upperLimit?: ILevel
    elementIndex?: number
    element?: IElement
}

export interface IRoomTable {
    getCount(): Promise<number>
    get(roomIndex: number, recursive?: boolean): Promise<IRoom>
    getAll(): Promise<IRoom[]>
    
    getBaseOffset(roomIndex: number): Promise<number | undefined>
    getAllBaseOffset(): Promise<number[] | undefined>
    getLimitOffset(roomIndex: number): Promise<number | undefined>
    getAllLimitOffset(): Promise<number[] | undefined>
    getUnboundedHeight(roomIndex: number): Promise<number | undefined>
    getAllUnboundedHeight(): Promise<number[] | undefined>
    getVolume(roomIndex: number): Promise<number | undefined>
    getAllVolume(): Promise<number[] | undefined>
    getPerimeter(roomIndex: number): Promise<number | undefined>
    getAllPerimeter(): Promise<number[] | undefined>
    getArea(roomIndex: number): Promise<number | undefined>
    getAllArea(): Promise<number[] | undefined>
    getNumber(roomIndex: number): Promise<string | undefined>
    getAllNumber(): Promise<string[] | undefined>
    
    getUpperLimitIndex(roomIndex: number): Promise<number | undefined>
    getAllUpperLimitIndex(): Promise<number[] | undefined>
    getUpperLimit(roomIndex: number, recursive?: boolean): Promise<ILevel | undefined>
    getElementIndex(roomIndex: number): Promise<number | undefined>
    getAllElementIndex(): Promise<number[] | undefined>
    getElement(roomIndex: number, recursive?: boolean): Promise<IElement | undefined>
}

export class Room implements IRoom {
    index: number
    baseOffset?: number
    limitOffset?: number
    unboundedHeight?: number
    volume?: number
    perimeter?: number
    area?: number
    number?: string
    
    upperLimitIndex?: number
    upperLimit?: ILevel
    elementIndex?: number
    element?: IElement
    
    static async createFromTable(table: IRoomTable, index: number, recursive: boolean = false): Promise<IRoom> {
        let result = new Room()
        result.index = index
        
        await Promise.all([
            table.getBaseOffset(index).then(v => result.baseOffset = v),
            table.getLimitOffset(index).then(v => result.limitOffset = v),
            table.getUnboundedHeight(index).then(v => result.unboundedHeight = v),
            table.getVolume(index).then(v => result.volume = v),
            table.getPerimeter(index).then(v => result.perimeter = v),
            table.getArea(index).then(v => result.area = v),
            table.getNumber(index).then(v => result.number = v),
            table.getUpperLimitIndex(index).then(v => result.upperLimitIndex = v),
            table.getElementIndex(index).then(v => result.elementIndex = v),
        ])
        
        if (recursive) {
            await Promise.all([
                table.getUpperLimit(index).then(v => result.upperLimit = v),
                table.getElement(index).then(v => result.element = v),
            ])
        }
        
        return result
    }
}

export class RoomTable implements IRoomTable {
    private document: VimDocument
    private entityTable: EntityTable
    
    static async createFromDocument(document: VimDocument): Promise<IRoomTable | undefined> {
        const entity = await document.entities.getBfast("Vim.Room")
        
        if (!entity) {
            return undefined
        }
        
        let table = new RoomTable()
        table.document = document
        table.entityTable = new EntityTable(entity, document.strings)
        
        return table
    }
    
    async getCount(): Promise<number> {
        return (await this.entityTable.getArray("double:BaseOffset"))?.length ?? 0
    }
    
    async get(roomIndex: number, recursive?: boolean): Promise<IRoom> {
        return await Room.createFromTable(this, roomIndex, recursive)
    }
    
    async getAll(): Promise<IRoom[]> {
        const localTable = await this.entityTable.getLocal()
        
        let baseOffset: number[] | undefined
        let limitOffset: number[] | undefined
        let unboundedHeight: number[] | undefined
        let volume: number[] | undefined
        let perimeter: number[] | undefined
        let area: number[] | undefined
        let number: string[] | undefined
        let upperLimitIndex: number[] | undefined
        let elementIndex: number[] | undefined
        
        await Promise.all([
            localTable.getArray("double:BaseOffset").then(a => baseOffset = a),
            localTable.getArray("double:LimitOffset").then(a => limitOffset = a),
            localTable.getArray("double:UnboundedHeight").then(a => unboundedHeight = a),
            localTable.getArray("double:Volume").then(a => volume = a),
            localTable.getArray("double:Perimeter").then(a => perimeter = a),
            localTable.getArray("double:Area").then(a => area = a),
            localTable.getStringArray("string:Number").then(a => number = a),
            localTable.getArray("index:Vim.Level:UpperLimit").then(a => upperLimitIndex = a),
            localTable.getArray("index:Vim.Element:Element").then(a => elementIndex = a),
        ])
        
        let room: IRoom[] = []
        
        for (let i = 0; i <= baseOffset!.length; i++) {
            room.push({
                index: i,
                baseOffset: baseOffset ? baseOffset[i] : undefined,
                limitOffset: limitOffset ? limitOffset[i] : undefined,
                unboundedHeight: unboundedHeight ? unboundedHeight[i] : undefined,
                volume: volume ? volume[i] : undefined,
                perimeter: perimeter ? perimeter[i] : undefined,
                area: area ? area[i] : undefined,
                number: number ? number[i] : undefined,
                upperLimitIndex: upperLimitIndex ? upperLimitIndex[i] : undefined,
                elementIndex: elementIndex ? elementIndex[i] : undefined
            })
        }
        
        return room
    }
    
    async getBaseOffset(roomIndex: number): Promise<number | undefined>{
        return await this.entityTable.getNumber(roomIndex, "double:BaseOffset")
    }
    
    async getAllBaseOffset(): Promise<number[] | undefined>{
        return await this.entityTable.getArray("double:BaseOffset")
    }
    
    async getLimitOffset(roomIndex: number): Promise<number | undefined>{
        return await this.entityTable.getNumber(roomIndex, "double:LimitOffset")
    }
    
    async getAllLimitOffset(): Promise<number[] | undefined>{
        return await this.entityTable.getArray("double:LimitOffset")
    }
    
    async getUnboundedHeight(roomIndex: number): Promise<number | undefined>{
        return await this.entityTable.getNumber(roomIndex, "double:UnboundedHeight")
    }
    
    async getAllUnboundedHeight(): Promise<number[] | undefined>{
        return await this.entityTable.getArray("double:UnboundedHeight")
    }
    
    async getVolume(roomIndex: number): Promise<number | undefined>{
        return await this.entityTable.getNumber(roomIndex, "double:Volume")
    }
    
    async getAllVolume(): Promise<number[] | undefined>{
        return await this.entityTable.getArray("double:Volume")
    }
    
    async getPerimeter(roomIndex: number): Promise<number | undefined>{
        return await this.entityTable.getNumber(roomIndex, "double:Perimeter")
    }
    
    async getAllPerimeter(): Promise<number[] | undefined>{
        return await this.entityTable.getArray("double:Perimeter")
    }
    
    async getArea(roomIndex: number): Promise<number | undefined>{
        return await this.entityTable.getNumber(roomIndex, "double:Area")
    }
    
    async getAllArea(): Promise<number[] | undefined>{
        return await this.entityTable.getArray("double:Area")
    }
    
    async getNumber(roomIndex: number): Promise<string | undefined>{
        return await this.entityTable.getString(roomIndex, "string:Number")
    }
    
    async getAllNumber(): Promise<string[] | undefined>{
        return await this.entityTable.getStringArray("string:Number")
    }
    
    async getUpperLimitIndex(roomIndex: number): Promise<number | undefined> {
        return await this.entityTable.getNumber(roomIndex, "index:Vim.Level:UpperLimit")
    }
    
    async getAllUpperLimitIndex(): Promise<number[] | undefined> {
        return await this.entityTable.getArray("index:Vim.Level:UpperLimit")
    }
    
    async getUpperLimit(roomIndex: number, recursive?: boolean): Promise<ILevel | undefined> {
        const index = await this.getUpperLimitIndex(roomIndex)
        
        if (index === undefined) {
            return undefined
        }
        
        return await this.document.level?.get(index, recursive)
    }
    
    async getElementIndex(roomIndex: number): Promise<number | undefined> {
        return await this.entityTable.getNumber(roomIndex, "index:Vim.Element:Element")
    }
    
    async getAllElementIndex(): Promise<number[] | undefined> {
        return await this.entityTable.getArray("index:Vim.Element:Element")
    }
    
    async getElement(roomIndex: number, recursive?: boolean): Promise<IElement | undefined> {
        const index = await this.getElementIndex(roomIndex)
        
        if (index === undefined) {
            return undefined
        }
        
        return await this.document.element?.get(index, recursive)
    }
    
}

export interface IBimDocument {
    index: number
    title?: string
    isMetric?: boolean
    guid?: string
    numSaves?: number
    isLinked?: boolean
    isDetached?: boolean
    isWorkshared?: boolean
    pathName?: string
    latitude?: number
    longitude?: number
    timeZone?: number
    placeName?: string
    weatherStationName?: string
    elevation?: number
    projectLocation?: string
    issueDate?: string
    status?: string
    clientName?: string
    address?: string
    name?: string
    number?: string
    author?: string
    buildingName?: string
    organizationName?: string
    organizationDescription?: string
    product?: string
    version?: string
    user?: string
    
    activeViewIndex?: number
    activeView?: IView
    ownerFamilyIndex?: number
    ownerFamily?: IFamily
    parentIndex?: number
    parent?: IBimDocument
    elementIndex?: number
    element?: IElement
}

export interface IBimDocumentTable {
    getCount(): Promise<number>
    get(bimDocumentIndex: number, recursive?: boolean): Promise<IBimDocument>
    getAll(): Promise<IBimDocument[]>
    
    getTitle(bimDocumentIndex: number): Promise<string | undefined>
    getAllTitle(): Promise<string[] | undefined>
    getIsMetric(bimDocumentIndex: number): Promise<boolean | undefined>
    getAllIsMetric(): Promise<boolean[] | undefined>
    getGuid(bimDocumentIndex: number): Promise<string | undefined>
    getAllGuid(): Promise<string[] | undefined>
    getNumSaves(bimDocumentIndex: number): Promise<number | undefined>
    getAllNumSaves(): Promise<number[] | undefined>
    getIsLinked(bimDocumentIndex: number): Promise<boolean | undefined>
    getAllIsLinked(): Promise<boolean[] | undefined>
    getIsDetached(bimDocumentIndex: number): Promise<boolean | undefined>
    getAllIsDetached(): Promise<boolean[] | undefined>
    getIsWorkshared(bimDocumentIndex: number): Promise<boolean | undefined>
    getAllIsWorkshared(): Promise<boolean[] | undefined>
    getPathName(bimDocumentIndex: number): Promise<string | undefined>
    getAllPathName(): Promise<string[] | undefined>
    getLatitude(bimDocumentIndex: number): Promise<number | undefined>
    getAllLatitude(): Promise<number[] | undefined>
    getLongitude(bimDocumentIndex: number): Promise<number | undefined>
    getAllLongitude(): Promise<number[] | undefined>
    getTimeZone(bimDocumentIndex: number): Promise<number | undefined>
    getAllTimeZone(): Promise<number[] | undefined>
    getPlaceName(bimDocumentIndex: number): Promise<string | undefined>
    getAllPlaceName(): Promise<string[] | undefined>
    getWeatherStationName(bimDocumentIndex: number): Promise<string | undefined>
    getAllWeatherStationName(): Promise<string[] | undefined>
    getElevation(bimDocumentIndex: number): Promise<number | undefined>
    getAllElevation(): Promise<number[] | undefined>
    getProjectLocation(bimDocumentIndex: number): Promise<string | undefined>
    getAllProjectLocation(): Promise<string[] | undefined>
    getIssueDate(bimDocumentIndex: number): Promise<string | undefined>
    getAllIssueDate(): Promise<string[] | undefined>
    getStatus(bimDocumentIndex: number): Promise<string | undefined>
    getAllStatus(): Promise<string[] | undefined>
    getClientName(bimDocumentIndex: number): Promise<string | undefined>
    getAllClientName(): Promise<string[] | undefined>
    getAddress(bimDocumentIndex: number): Promise<string | undefined>
    getAllAddress(): Promise<string[] | undefined>
    getName(bimDocumentIndex: number): Promise<string | undefined>
    getAllName(): Promise<string[] | undefined>
    getNumber(bimDocumentIndex: number): Promise<string | undefined>
    getAllNumber(): Promise<string[] | undefined>
    getAuthor(bimDocumentIndex: number): Promise<string | undefined>
    getAllAuthor(): Promise<string[] | undefined>
    getBuildingName(bimDocumentIndex: number): Promise<string | undefined>
    getAllBuildingName(): Promise<string[] | undefined>
    getOrganizationName(bimDocumentIndex: number): Promise<string | undefined>
    getAllOrganizationName(): Promise<string[] | undefined>
    getOrganizationDescription(bimDocumentIndex: number): Promise<string | undefined>
    getAllOrganizationDescription(): Promise<string[] | undefined>
    getProduct(bimDocumentIndex: number): Promise<string | undefined>
    getAllProduct(): Promise<string[] | undefined>
    getVersion(bimDocumentIndex: number): Promise<string | undefined>
    getAllVersion(): Promise<string[] | undefined>
    getUser(bimDocumentIndex: number): Promise<string | undefined>
    getAllUser(): Promise<string[] | undefined>
    
    getActiveViewIndex(bimDocumentIndex: number): Promise<number | undefined>
    getAllActiveViewIndex(): Promise<number[] | undefined>
    getActiveView(bimDocumentIndex: number, recursive?: boolean): Promise<IView | undefined>
    getOwnerFamilyIndex(bimDocumentIndex: number): Promise<number | undefined>
    getAllOwnerFamilyIndex(): Promise<number[] | undefined>
    getOwnerFamily(bimDocumentIndex: number, recursive?: boolean): Promise<IFamily | undefined>
    getParentIndex(bimDocumentIndex: number): Promise<number | undefined>
    getAllParentIndex(): Promise<number[] | undefined>
    getParent(bimDocumentIndex: number, recursive?: boolean): Promise<IBimDocument | undefined>
    getElementIndex(bimDocumentIndex: number): Promise<number | undefined>
    getAllElementIndex(): Promise<number[] | undefined>
    getElement(bimDocumentIndex: number, recursive?: boolean): Promise<IElement | undefined>
}

export class BimDocument implements IBimDocument {
    index: number
    title?: string
    isMetric?: boolean
    guid?: string
    numSaves?: number
    isLinked?: boolean
    isDetached?: boolean
    isWorkshared?: boolean
    pathName?: string
    latitude?: number
    longitude?: number
    timeZone?: number
    placeName?: string
    weatherStationName?: string
    elevation?: number
    projectLocation?: string
    issueDate?: string
    status?: string
    clientName?: string
    address?: string
    name?: string
    number?: string
    author?: string
    buildingName?: string
    organizationName?: string
    organizationDescription?: string
    product?: string
    version?: string
    user?: string
    
    activeViewIndex?: number
    activeView?: IView
    ownerFamilyIndex?: number
    ownerFamily?: IFamily
    parentIndex?: number
    parent?: IBimDocument
    elementIndex?: number
    element?: IElement
    
    static async createFromTable(table: IBimDocumentTable, index: number, recursive: boolean = false): Promise<IBimDocument> {
        let result = new BimDocument()
        result.index = index
        
        await Promise.all([
            table.getTitle(index).then(v => result.title = v),
            table.getIsMetric(index).then(v => result.isMetric = v),
            table.getGuid(index).then(v => result.guid = v),
            table.getNumSaves(index).then(v => result.numSaves = v),
            table.getIsLinked(index).then(v => result.isLinked = v),
            table.getIsDetached(index).then(v => result.isDetached = v),
            table.getIsWorkshared(index).then(v => result.isWorkshared = v),
            table.getPathName(index).then(v => result.pathName = v),
            table.getLatitude(index).then(v => result.latitude = v),
            table.getLongitude(index).then(v => result.longitude = v),
            table.getTimeZone(index).then(v => result.timeZone = v),
            table.getPlaceName(index).then(v => result.placeName = v),
            table.getWeatherStationName(index).then(v => result.weatherStationName = v),
            table.getElevation(index).then(v => result.elevation = v),
            table.getProjectLocation(index).then(v => result.projectLocation = v),
            table.getIssueDate(index).then(v => result.issueDate = v),
            table.getStatus(index).then(v => result.status = v),
            table.getClientName(index).then(v => result.clientName = v),
            table.getAddress(index).then(v => result.address = v),
            table.getName(index).then(v => result.name = v),
            table.getNumber(index).then(v => result.number = v),
            table.getAuthor(index).then(v => result.author = v),
            table.getBuildingName(index).then(v => result.buildingName = v),
            table.getOrganizationName(index).then(v => result.organizationName = v),
            table.getOrganizationDescription(index).then(v => result.organizationDescription = v),
            table.getProduct(index).then(v => result.product = v),
            table.getVersion(index).then(v => result.version = v),
            table.getUser(index).then(v => result.user = v),
            table.getActiveViewIndex(index).then(v => result.activeViewIndex = v),
            table.getOwnerFamilyIndex(index).then(v => result.ownerFamilyIndex = v),
            table.getParentIndex(index).then(v => result.parentIndex = v),
            table.getElementIndex(index).then(v => result.elementIndex = v),
        ])
        
        if (recursive) {
            await Promise.all([
                table.getActiveView(index).then(v => result.activeView = v),
                table.getOwnerFamily(index).then(v => result.ownerFamily = v),
                table.getParent(index).then(v => result.parent = v),
                table.getElement(index).then(v => result.element = v),
            ])
        }
        
        return result
    }
}

export class BimDocumentTable implements IBimDocumentTable {
    private document: VimDocument
    private entityTable: EntityTable
    
    static async createFromDocument(document: VimDocument): Promise<IBimDocumentTable | undefined> {
        const entity = await document.entities.getBfast("Vim.BimDocument")
        
        if (!entity) {
            return undefined
        }
        
        let table = new BimDocumentTable()
        table.document = document
        table.entityTable = new EntityTable(entity, document.strings)
        
        return table
    }
    
    async getCount(): Promise<number> {
        return (await this.entityTable.getArray("string:Title"))?.length ?? 0
    }
    
    async get(bimDocumentIndex: number, recursive?: boolean): Promise<IBimDocument> {
        return await BimDocument.createFromTable(this, bimDocumentIndex, recursive)
    }
    
    async getAll(): Promise<IBimDocument[]> {
        const localTable = await this.entityTable.getLocal()
        
        let title: string[] | undefined
        let isMetric: boolean[] | undefined
        let guid: string[] | undefined
        let numSaves: number[] | undefined
        let isLinked: boolean[] | undefined
        let isDetached: boolean[] | undefined
        let isWorkshared: boolean[] | undefined
        let pathName: string[] | undefined
        let latitude: number[] | undefined
        let longitude: number[] | undefined
        let timeZone: number[] | undefined
        let placeName: string[] | undefined
        let weatherStationName: string[] | undefined
        let elevation: number[] | undefined
        let projectLocation: string[] | undefined
        let issueDate: string[] | undefined
        let status: string[] | undefined
        let clientName: string[] | undefined
        let address: string[] | undefined
        let name: string[] | undefined
        let number: string[] | undefined
        let author: string[] | undefined
        let buildingName: string[] | undefined
        let organizationName: string[] | undefined
        let organizationDescription: string[] | undefined
        let product: string[] | undefined
        let version: string[] | undefined
        let user: string[] | undefined
        let activeViewIndex: number[] | undefined
        let ownerFamilyIndex: number[] | undefined
        let parentIndex: number[] | undefined
        let elementIndex: number[] | undefined
        
        await Promise.all([
            localTable.getStringArray("string:Title").then(a => title = a),
            localTable.getBooleanArray("byte:IsMetric").then(a => isMetric = a),
            localTable.getStringArray("string:Guid").then(a => guid = a),
            localTable.getArray("int:NumSaves").then(a => numSaves = a),
            localTable.getBooleanArray("byte:IsLinked").then(a => isLinked = a),
            localTable.getBooleanArray("byte:IsDetached").then(a => isDetached = a),
            localTable.getBooleanArray("byte:IsWorkshared").then(a => isWorkshared = a),
            localTable.getStringArray("string:PathName").then(a => pathName = a),
            localTable.getArray("double:Latitude").then(a => latitude = a),
            localTable.getArray("double:Longitude").then(a => longitude = a),
            localTable.getArray("double:TimeZone").then(a => timeZone = a),
            localTable.getStringArray("string:PlaceName").then(a => placeName = a),
            localTable.getStringArray("string:WeatherStationName").then(a => weatherStationName = a),
            localTable.getArray("double:Elevation").then(a => elevation = a),
            localTable.getStringArray("string:ProjectLocation").then(a => projectLocation = a),
            localTable.getStringArray("string:IssueDate").then(a => issueDate = a),
            localTable.getStringArray("string:Status").then(a => status = a),
            localTable.getStringArray("string:ClientName").then(a => clientName = a),
            localTable.getStringArray("string:Address").then(a => address = a),
            localTable.getStringArray("string:Name").then(a => name = a),
            localTable.getStringArray("string:Number").then(a => number = a),
            localTable.getStringArray("string:Author").then(a => author = a),
            localTable.getStringArray("string:BuildingName").then(a => buildingName = a),
            localTable.getStringArray("string:OrganizationName").then(a => organizationName = a),
            localTable.getStringArray("string:OrganizationDescription").then(a => organizationDescription = a),
            localTable.getStringArray("string:Product").then(a => product = a),
            localTable.getStringArray("string:Version").then(a => version = a),
            localTable.getStringArray("string:User").then(a => user = a),
            localTable.getArray("index:Vim.View:ActiveView").then(a => activeViewIndex = a),
            localTable.getArray("index:Vim.Family:OwnerFamily").then(a => ownerFamilyIndex = a),
            localTable.getArray("index:Vim.BimDocument:Parent").then(a => parentIndex = a),
            localTable.getArray("index:Vim.Element:Element").then(a => elementIndex = a),
        ])
        
        let bimDocument: IBimDocument[] = []
        
        for (let i = 0; i <= title!.length; i++) {
            bimDocument.push({
                index: i,
                title: title ? title[i] : undefined,
                isMetric: isMetric ? isMetric[i] : undefined,
                guid: guid ? guid[i] : undefined,
                numSaves: numSaves ? numSaves[i] : undefined,
                isLinked: isLinked ? isLinked[i] : undefined,
                isDetached: isDetached ? isDetached[i] : undefined,
                isWorkshared: isWorkshared ? isWorkshared[i] : undefined,
                pathName: pathName ? pathName[i] : undefined,
                latitude: latitude ? latitude[i] : undefined,
                longitude: longitude ? longitude[i] : undefined,
                timeZone: timeZone ? timeZone[i] : undefined,
                placeName: placeName ? placeName[i] : undefined,
                weatherStationName: weatherStationName ? weatherStationName[i] : undefined,
                elevation: elevation ? elevation[i] : undefined,
                projectLocation: projectLocation ? projectLocation[i] : undefined,
                issueDate: issueDate ? issueDate[i] : undefined,
                status: status ? status[i] : undefined,
                clientName: clientName ? clientName[i] : undefined,
                address: address ? address[i] : undefined,
                name: name ? name[i] : undefined,
                number: number ? number[i] : undefined,
                author: author ? author[i] : undefined,
                buildingName: buildingName ? buildingName[i] : undefined,
                organizationName: organizationName ? organizationName[i] : undefined,
                organizationDescription: organizationDescription ? organizationDescription[i] : undefined,
                product: product ? product[i] : undefined,
                version: version ? version[i] : undefined,
                user: user ? user[i] : undefined,
                activeViewIndex: activeViewIndex ? activeViewIndex[i] : undefined,
                ownerFamilyIndex: ownerFamilyIndex ? ownerFamilyIndex[i] : undefined,
                parentIndex: parentIndex ? parentIndex[i] : undefined,
                elementIndex: elementIndex ? elementIndex[i] : undefined
            })
        }
        
        return bimDocument
    }
    
    async getTitle(bimDocumentIndex: number): Promise<string | undefined>{
        return await this.entityTable.getString(bimDocumentIndex, "string:Title")
    }
    
    async getAllTitle(): Promise<string[] | undefined>{
        return await this.entityTable.getStringArray("string:Title")
    }
    
    async getIsMetric(bimDocumentIndex: number): Promise<boolean | undefined>{
        return await this.entityTable.getBoolean(bimDocumentIndex, "byte:IsMetric")
    }
    
    async getAllIsMetric(): Promise<boolean[] | undefined>{
        return await this.entityTable.getBooleanArray("byte:IsMetric")
    }
    
    async getGuid(bimDocumentIndex: number): Promise<string | undefined>{
        return await this.entityTable.getString(bimDocumentIndex, "string:Guid")
    }
    
    async getAllGuid(): Promise<string[] | undefined>{
        return await this.entityTable.getStringArray("string:Guid")
    }
    
    async getNumSaves(bimDocumentIndex: number): Promise<number | undefined>{
        return await this.entityTable.getNumber(bimDocumentIndex, "int:NumSaves")
    }
    
    async getAllNumSaves(): Promise<number[] | undefined>{
        return await this.entityTable.getArray("int:NumSaves")
    }
    
    async getIsLinked(bimDocumentIndex: number): Promise<boolean | undefined>{
        return await this.entityTable.getBoolean(bimDocumentIndex, "byte:IsLinked")
    }
    
    async getAllIsLinked(): Promise<boolean[] | undefined>{
        return await this.entityTable.getBooleanArray("byte:IsLinked")
    }
    
    async getIsDetached(bimDocumentIndex: number): Promise<boolean | undefined>{
        return await this.entityTable.getBoolean(bimDocumentIndex, "byte:IsDetached")
    }
    
    async getAllIsDetached(): Promise<boolean[] | undefined>{
        return await this.entityTable.getBooleanArray("byte:IsDetached")
    }
    
    async getIsWorkshared(bimDocumentIndex: number): Promise<boolean | undefined>{
        return await this.entityTable.getBoolean(bimDocumentIndex, "byte:IsWorkshared")
    }
    
    async getAllIsWorkshared(): Promise<boolean[] | undefined>{
        return await this.entityTable.getBooleanArray("byte:IsWorkshared")
    }
    
    async getPathName(bimDocumentIndex: number): Promise<string | undefined>{
        return await this.entityTable.getString(bimDocumentIndex, "string:PathName")
    }
    
    async getAllPathName(): Promise<string[] | undefined>{
        return await this.entityTable.getStringArray("string:PathName")
    }
    
    async getLatitude(bimDocumentIndex: number): Promise<number | undefined>{
        return await this.entityTable.getNumber(bimDocumentIndex, "double:Latitude")
    }
    
    async getAllLatitude(): Promise<number[] | undefined>{
        return await this.entityTable.getArray("double:Latitude")
    }
    
    async getLongitude(bimDocumentIndex: number): Promise<number | undefined>{
        return await this.entityTable.getNumber(bimDocumentIndex, "double:Longitude")
    }
    
    async getAllLongitude(): Promise<number[] | undefined>{
        return await this.entityTable.getArray("double:Longitude")
    }
    
    async getTimeZone(bimDocumentIndex: number): Promise<number | undefined>{
        return await this.entityTable.getNumber(bimDocumentIndex, "double:TimeZone")
    }
    
    async getAllTimeZone(): Promise<number[] | undefined>{
        return await this.entityTable.getArray("double:TimeZone")
    }
    
    async getPlaceName(bimDocumentIndex: number): Promise<string | undefined>{
        return await this.entityTable.getString(bimDocumentIndex, "string:PlaceName")
    }
    
    async getAllPlaceName(): Promise<string[] | undefined>{
        return await this.entityTable.getStringArray("string:PlaceName")
    }
    
    async getWeatherStationName(bimDocumentIndex: number): Promise<string | undefined>{
        return await this.entityTable.getString(bimDocumentIndex, "string:WeatherStationName")
    }
    
    async getAllWeatherStationName(): Promise<string[] | undefined>{
        return await this.entityTable.getStringArray("string:WeatherStationName")
    }
    
    async getElevation(bimDocumentIndex: number): Promise<number | undefined>{
        return await this.entityTable.getNumber(bimDocumentIndex, "double:Elevation")
    }
    
    async getAllElevation(): Promise<number[] | undefined>{
        return await this.entityTable.getArray("double:Elevation")
    }
    
    async getProjectLocation(bimDocumentIndex: number): Promise<string | undefined>{
        return await this.entityTable.getString(bimDocumentIndex, "string:ProjectLocation")
    }
    
    async getAllProjectLocation(): Promise<string[] | undefined>{
        return await this.entityTable.getStringArray("string:ProjectLocation")
    }
    
    async getIssueDate(bimDocumentIndex: number): Promise<string | undefined>{
        return await this.entityTable.getString(bimDocumentIndex, "string:IssueDate")
    }
    
    async getAllIssueDate(): Promise<string[] | undefined>{
        return await this.entityTable.getStringArray("string:IssueDate")
    }
    
    async getStatus(bimDocumentIndex: number): Promise<string | undefined>{
        return await this.entityTable.getString(bimDocumentIndex, "string:Status")
    }
    
    async getAllStatus(): Promise<string[] | undefined>{
        return await this.entityTable.getStringArray("string:Status")
    }
    
    async getClientName(bimDocumentIndex: number): Promise<string | undefined>{
        return await this.entityTable.getString(bimDocumentIndex, "string:ClientName")
    }
    
    async getAllClientName(): Promise<string[] | undefined>{
        return await this.entityTable.getStringArray("string:ClientName")
    }
    
    async getAddress(bimDocumentIndex: number): Promise<string | undefined>{
        return await this.entityTable.getString(bimDocumentIndex, "string:Address")
    }
    
    async getAllAddress(): Promise<string[] | undefined>{
        return await this.entityTable.getStringArray("string:Address")
    }
    
    async getName(bimDocumentIndex: number): Promise<string | undefined>{
        return await this.entityTable.getString(bimDocumentIndex, "string:Name")
    }
    
    async getAllName(): Promise<string[] | undefined>{
        return await this.entityTable.getStringArray("string:Name")
    }
    
    async getNumber(bimDocumentIndex: number): Promise<string | undefined>{
        return await this.entityTable.getString(bimDocumentIndex, "string:Number")
    }
    
    async getAllNumber(): Promise<string[] | undefined>{
        return await this.entityTable.getStringArray("string:Number")
    }
    
    async getAuthor(bimDocumentIndex: number): Promise<string | undefined>{
        return await this.entityTable.getString(bimDocumentIndex, "string:Author")
    }
    
    async getAllAuthor(): Promise<string[] | undefined>{
        return await this.entityTable.getStringArray("string:Author")
    }
    
    async getBuildingName(bimDocumentIndex: number): Promise<string | undefined>{
        return await this.entityTable.getString(bimDocumentIndex, "string:BuildingName")
    }
    
    async getAllBuildingName(): Promise<string[] | undefined>{
        return await this.entityTable.getStringArray("string:BuildingName")
    }
    
    async getOrganizationName(bimDocumentIndex: number): Promise<string | undefined>{
        return await this.entityTable.getString(bimDocumentIndex, "string:OrganizationName")
    }
    
    async getAllOrganizationName(): Promise<string[] | undefined>{
        return await this.entityTable.getStringArray("string:OrganizationName")
    }
    
    async getOrganizationDescription(bimDocumentIndex: number): Promise<string | undefined>{
        return await this.entityTable.getString(bimDocumentIndex, "string:OrganizationDescription")
    }
    
    async getAllOrganizationDescription(): Promise<string[] | undefined>{
        return await this.entityTable.getStringArray("string:OrganizationDescription")
    }
    
    async getProduct(bimDocumentIndex: number): Promise<string | undefined>{
        return await this.entityTable.getString(bimDocumentIndex, "string:Product")
    }
    
    async getAllProduct(): Promise<string[] | undefined>{
        return await this.entityTable.getStringArray("string:Product")
    }
    
    async getVersion(bimDocumentIndex: number): Promise<string | undefined>{
        return await this.entityTable.getString(bimDocumentIndex, "string:Version")
    }
    
    async getAllVersion(): Promise<string[] | undefined>{
        return await this.entityTable.getStringArray("string:Version")
    }
    
    async getUser(bimDocumentIndex: number): Promise<string | undefined>{
        return await this.entityTable.getString(bimDocumentIndex, "string:User")
    }
    
    async getAllUser(): Promise<string[] | undefined>{
        return await this.entityTable.getStringArray("string:User")
    }
    
    async getActiveViewIndex(bimDocumentIndex: number): Promise<number | undefined> {
        return await this.entityTable.getNumber(bimDocumentIndex, "index:Vim.View:ActiveView")
    }
    
    async getAllActiveViewIndex(): Promise<number[] | undefined> {
        return await this.entityTable.getArray("index:Vim.View:ActiveView")
    }
    
    async getActiveView(bimDocumentIndex: number, recursive?: boolean): Promise<IView | undefined> {
        const index = await this.getActiveViewIndex(bimDocumentIndex)
        
        if (index === undefined) {
            return undefined
        }
        
        return await this.document.view?.get(index, recursive)
    }
    
    async getOwnerFamilyIndex(bimDocumentIndex: number): Promise<number | undefined> {
        return await this.entityTable.getNumber(bimDocumentIndex, "index:Vim.Family:OwnerFamily")
    }
    
    async getAllOwnerFamilyIndex(): Promise<number[] | undefined> {
        return await this.entityTable.getArray("index:Vim.Family:OwnerFamily")
    }
    
    async getOwnerFamily(bimDocumentIndex: number, recursive?: boolean): Promise<IFamily | undefined> {
        const index = await this.getOwnerFamilyIndex(bimDocumentIndex)
        
        if (index === undefined) {
            return undefined
        }
        
        return await this.document.family?.get(index, recursive)
    }
    
    async getParentIndex(bimDocumentIndex: number): Promise<number | undefined> {
        return await this.entityTable.getNumber(bimDocumentIndex, "index:Vim.BimDocument:Parent")
    }
    
    async getAllParentIndex(): Promise<number[] | undefined> {
        return await this.entityTable.getArray("index:Vim.BimDocument:Parent")
    }
    
    async getParent(bimDocumentIndex: number, recursive?: boolean): Promise<IBimDocument | undefined> {
        const index = await this.getParentIndex(bimDocumentIndex)
        
        if (index === undefined) {
            return undefined
        }
        
        return await this.document.bimDocument?.get(index, recursive)
    }
    
    async getElementIndex(bimDocumentIndex: number): Promise<number | undefined> {
        return await this.entityTable.getNumber(bimDocumentIndex, "index:Vim.Element:Element")
    }
    
    async getAllElementIndex(): Promise<number[] | undefined> {
        return await this.entityTable.getArray("index:Vim.Element:Element")
    }
    
    async getElement(bimDocumentIndex: number, recursive?: boolean): Promise<IElement | undefined> {
        const index = await this.getElementIndex(bimDocumentIndex)
        
        if (index === undefined) {
            return undefined
        }
        
        return await this.document.element?.get(index, recursive)
    }
    
}

export interface IDisplayUnitInBimDocument {
    index: number
    
    displayUnitIndex?: number
    displayUnit?: IDisplayUnit
    bimDocumentIndex?: number
    bimDocument?: IBimDocument
}

export interface IDisplayUnitInBimDocumentTable {
    getCount(): Promise<number>
    get(displayUnitInBimDocumentIndex: number, recursive?: boolean): Promise<IDisplayUnitInBimDocument>
    getAll(): Promise<IDisplayUnitInBimDocument[]>
    
    getDisplayUnitIndex(displayUnitInBimDocumentIndex: number): Promise<number | undefined>
    getAllDisplayUnitIndex(): Promise<number[] | undefined>
    getDisplayUnit(displayUnitInBimDocumentIndex: number, recursive?: boolean): Promise<IDisplayUnit | undefined>
    getBimDocumentIndex(displayUnitInBimDocumentIndex: number): Promise<number | undefined>
    getAllBimDocumentIndex(): Promise<number[] | undefined>
    getBimDocument(displayUnitInBimDocumentIndex: number, recursive?: boolean): Promise<IBimDocument | undefined>
}

export class DisplayUnitInBimDocument implements IDisplayUnitInBimDocument {
    index: number
    
    displayUnitIndex?: number
    displayUnit?: IDisplayUnit
    bimDocumentIndex?: number
    bimDocument?: IBimDocument
    
    static async createFromTable(table: IDisplayUnitInBimDocumentTable, index: number, recursive: boolean = false): Promise<IDisplayUnitInBimDocument> {
        let result = new DisplayUnitInBimDocument()
        result.index = index
        
        await Promise.all([
            table.getDisplayUnitIndex(index).then(v => result.displayUnitIndex = v),
            table.getBimDocumentIndex(index).then(v => result.bimDocumentIndex = v),
        ])
        
        if (recursive) {
            await Promise.all([
                table.getDisplayUnit(index).then(v => result.displayUnit = v),
                table.getBimDocument(index).then(v => result.bimDocument = v),
            ])
        }
        
        return result
    }
}

export class DisplayUnitInBimDocumentTable implements IDisplayUnitInBimDocumentTable {
    private document: VimDocument
    private entityTable: EntityTable
    
    static async createFromDocument(document: VimDocument): Promise<IDisplayUnitInBimDocumentTable | undefined> {
        const entity = await document.entities.getBfast("Vim.DisplayUnitInBimDocument")
        
        if (!entity) {
            return undefined
        }
        
        let table = new DisplayUnitInBimDocumentTable()
        table.document = document
        table.entityTable = new EntityTable(entity, document.strings)
        
        return table
    }
    
    async getCount(): Promise<number> {
        return (await this.entityTable.getArray("index:Vim.DisplayUnit:DisplayUnit"))?.length ?? 0
    }
    
    async get(displayUnitInBimDocumentIndex: number, recursive?: boolean): Promise<IDisplayUnitInBimDocument> {
        return await DisplayUnitInBimDocument.createFromTable(this, displayUnitInBimDocumentIndex, recursive)
    }
    
    async getAll(): Promise<IDisplayUnitInBimDocument[]> {
        const localTable = await this.entityTable.getLocal()
        
        let displayUnitIndex: number[] | undefined
        let bimDocumentIndex: number[] | undefined
        
        await Promise.all([
            localTable.getArray("index:Vim.DisplayUnit:DisplayUnit").then(a => displayUnitIndex = a),
            localTable.getArray("index:Vim.BimDocument:BimDocument").then(a => bimDocumentIndex = a),
        ])
        
        let displayUnitInBimDocument: IDisplayUnitInBimDocument[] = []
        
        for (let i = 0; i <= displayUnitIndex!.length; i++) {
            displayUnitInBimDocument.push({
                index: i,
                displayUnitIndex: displayUnitIndex ? displayUnitIndex[i] : undefined,
                bimDocumentIndex: bimDocumentIndex ? bimDocumentIndex[i] : undefined
            })
        }
        
        return displayUnitInBimDocument
    }
    
    async getDisplayUnitIndex(displayUnitInBimDocumentIndex: number): Promise<number | undefined> {
        return await this.entityTable.getNumber(displayUnitInBimDocumentIndex, "index:Vim.DisplayUnit:DisplayUnit")
    }
    
    async getAllDisplayUnitIndex(): Promise<number[] | undefined> {
        return await this.entityTable.getArray("index:Vim.DisplayUnit:DisplayUnit")
    }
    
    async getDisplayUnit(displayUnitInBimDocumentIndex: number, recursive?: boolean): Promise<IDisplayUnit | undefined> {
        const index = await this.getDisplayUnitIndex(displayUnitInBimDocumentIndex)
        
        if (index === undefined) {
            return undefined
        }
        
        return await this.document.displayUnit?.get(index, recursive)
    }
    
    async getBimDocumentIndex(displayUnitInBimDocumentIndex: number): Promise<number | undefined> {
        return await this.entityTable.getNumber(displayUnitInBimDocumentIndex, "index:Vim.BimDocument:BimDocument")
    }
    
    async getAllBimDocumentIndex(): Promise<number[] | undefined> {
        return await this.entityTable.getArray("index:Vim.BimDocument:BimDocument")
    }
    
    async getBimDocument(displayUnitInBimDocumentIndex: number, recursive?: boolean): Promise<IBimDocument | undefined> {
        const index = await this.getBimDocumentIndex(displayUnitInBimDocumentIndex)
        
        if (index === undefined) {
            return undefined
        }
        
        return await this.document.bimDocument?.get(index, recursive)
    }
    
}

export interface IPhaseOrderInBimDocument {
    index: number
    orderIndex?: number
    
    phaseIndex?: number
    phase?: IPhase
    bimDocumentIndex?: number
    bimDocument?: IBimDocument
}

export interface IPhaseOrderInBimDocumentTable {
    getCount(): Promise<number>
    get(phaseOrderInBimDocumentIndex: number, recursive?: boolean): Promise<IPhaseOrderInBimDocument>
    getAll(): Promise<IPhaseOrderInBimDocument[]>
    
    getOrderIndex(phaseOrderInBimDocumentIndex: number): Promise<number | undefined>
    getAllOrderIndex(): Promise<number[] | undefined>
    
    getPhaseIndex(phaseOrderInBimDocumentIndex: number): Promise<number | undefined>
    getAllPhaseIndex(): Promise<number[] | undefined>
    getPhase(phaseOrderInBimDocumentIndex: number, recursive?: boolean): Promise<IPhase | undefined>
    getBimDocumentIndex(phaseOrderInBimDocumentIndex: number): Promise<number | undefined>
    getAllBimDocumentIndex(): Promise<number[] | undefined>
    getBimDocument(phaseOrderInBimDocumentIndex: number, recursive?: boolean): Promise<IBimDocument | undefined>
}

export class PhaseOrderInBimDocument implements IPhaseOrderInBimDocument {
    index: number
    orderIndex?: number
    
    phaseIndex?: number
    phase?: IPhase
    bimDocumentIndex?: number
    bimDocument?: IBimDocument
    
    static async createFromTable(table: IPhaseOrderInBimDocumentTable, index: number, recursive: boolean = false): Promise<IPhaseOrderInBimDocument> {
        let result = new PhaseOrderInBimDocument()
        result.index = index
        
        await Promise.all([
            table.getOrderIndex(index).then(v => result.orderIndex = v),
            table.getPhaseIndex(index).then(v => result.phaseIndex = v),
            table.getBimDocumentIndex(index).then(v => result.bimDocumentIndex = v),
        ])
        
        if (recursive) {
            await Promise.all([
                table.getPhase(index).then(v => result.phase = v),
                table.getBimDocument(index).then(v => result.bimDocument = v),
            ])
        }
        
        return result
    }
}

export class PhaseOrderInBimDocumentTable implements IPhaseOrderInBimDocumentTable {
    private document: VimDocument
    private entityTable: EntityTable
    
    static async createFromDocument(document: VimDocument): Promise<IPhaseOrderInBimDocumentTable | undefined> {
        const entity = await document.entities.getBfast("Vim.PhaseOrderInBimDocument")
        
        if (!entity) {
            return undefined
        }
        
        let table = new PhaseOrderInBimDocumentTable()
        table.document = document
        table.entityTable = new EntityTable(entity, document.strings)
        
        return table
    }
    
    async getCount(): Promise<number> {
        return (await this.entityTable.getArray("int:OrderIndex"))?.length ?? 0
    }
    
    async get(phaseOrderInBimDocumentIndex: number, recursive?: boolean): Promise<IPhaseOrderInBimDocument> {
        return await PhaseOrderInBimDocument.createFromTable(this, phaseOrderInBimDocumentIndex, recursive)
    }
    
    async getAll(): Promise<IPhaseOrderInBimDocument[]> {
        const localTable = await this.entityTable.getLocal()
        
        let orderIndex: number[] | undefined
        let phaseIndex: number[] | undefined
        let bimDocumentIndex: number[] | undefined
        
        await Promise.all([
            localTable.getArray("int:OrderIndex").then(a => orderIndex = a),
            localTable.getArray("index:Vim.Phase:Phase").then(a => phaseIndex = a),
            localTable.getArray("index:Vim.BimDocument:BimDocument").then(a => bimDocumentIndex = a),
        ])
        
        let phaseOrderInBimDocument: IPhaseOrderInBimDocument[] = []
        
        for (let i = 0; i <= orderIndex!.length; i++) {
            phaseOrderInBimDocument.push({
                index: i,
                orderIndex: orderIndex ? orderIndex[i] : undefined,
                phaseIndex: phaseIndex ? phaseIndex[i] : undefined,
                bimDocumentIndex: bimDocumentIndex ? bimDocumentIndex[i] : undefined
            })
        }
        
        return phaseOrderInBimDocument
    }
    
    async getOrderIndex(phaseOrderInBimDocumentIndex: number): Promise<number | undefined>{
        return await this.entityTable.getNumber(phaseOrderInBimDocumentIndex, "int:OrderIndex")
    }
    
    async getAllOrderIndex(): Promise<number[] | undefined>{
        return await this.entityTable.getArray("int:OrderIndex")
    }
    
    async getPhaseIndex(phaseOrderInBimDocumentIndex: number): Promise<number | undefined> {
        return await this.entityTable.getNumber(phaseOrderInBimDocumentIndex, "index:Vim.Phase:Phase")
    }
    
    async getAllPhaseIndex(): Promise<number[] | undefined> {
        return await this.entityTable.getArray("index:Vim.Phase:Phase")
    }
    
    async getPhase(phaseOrderInBimDocumentIndex: number, recursive?: boolean): Promise<IPhase | undefined> {
        const index = await this.getPhaseIndex(phaseOrderInBimDocumentIndex)
        
        if (index === undefined) {
            return undefined
        }
        
        return await this.document.phase?.get(index, recursive)
    }
    
    async getBimDocumentIndex(phaseOrderInBimDocumentIndex: number): Promise<number | undefined> {
        return await this.entityTable.getNumber(phaseOrderInBimDocumentIndex, "index:Vim.BimDocument:BimDocument")
    }
    
    async getAllBimDocumentIndex(): Promise<number[] | undefined> {
        return await this.entityTable.getArray("index:Vim.BimDocument:BimDocument")
    }
    
    async getBimDocument(phaseOrderInBimDocumentIndex: number, recursive?: boolean): Promise<IBimDocument | undefined> {
        const index = await this.getBimDocumentIndex(phaseOrderInBimDocumentIndex)
        
        if (index === undefined) {
            return undefined
        }
        
        return await this.document.bimDocument?.get(index, recursive)
    }
    
}

export interface ICategory {
    index: number
    name?: string
    id?: number
    categoryType?: string
    lineColor?: Vector3
    builtInCategory?: string
    
    parentIndex?: number
    parent?: ICategory
    materialIndex?: number
    material?: IMaterial
}

export interface ICategoryTable {
    getCount(): Promise<number>
    get(categoryIndex: number, recursive?: boolean): Promise<ICategory>
    getAll(): Promise<ICategory[]>
    
    getName(categoryIndex: number): Promise<string | undefined>
    getAllName(): Promise<string[] | undefined>
    getId(categoryIndex: number): Promise<number | undefined>
    getAllId(): Promise<number[] | undefined>
    getCategoryType(categoryIndex: number): Promise<string | undefined>
    getAllCategoryType(): Promise<string[] | undefined>
    getLineColor(categoryIndex: number): Promise<Vector3 | undefined>
    getAllLineColor(): Promise<Vector3[] | undefined>
    getBuiltInCategory(categoryIndex: number): Promise<string | undefined>
    getAllBuiltInCategory(): Promise<string[] | undefined>
    
    getParentIndex(categoryIndex: number): Promise<number | undefined>
    getAllParentIndex(): Promise<number[] | undefined>
    getParent(categoryIndex: number, recursive?: boolean): Promise<ICategory | undefined>
    getMaterialIndex(categoryIndex: number): Promise<number | undefined>
    getAllMaterialIndex(): Promise<number[] | undefined>
    getMaterial(categoryIndex: number, recursive?: boolean): Promise<IMaterial | undefined>
}

export class Category implements ICategory {
    index: number
    name?: string
    id?: number
    categoryType?: string
    lineColor?: Vector3
    builtInCategory?: string
    
    parentIndex?: number
    parent?: ICategory
    materialIndex?: number
    material?: IMaterial
    
    static async createFromTable(table: ICategoryTable, index: number, recursive: boolean = false): Promise<ICategory> {
        let result = new Category()
        result.index = index
        
        await Promise.all([
            table.getName(index).then(v => result.name = v),
            table.getId(index).then(v => result.id = v),
            table.getCategoryType(index).then(v => result.categoryType = v),
            table.getLineColor(index).then(v => result.lineColor = v),
            table.getBuiltInCategory(index).then(v => result.builtInCategory = v),
            table.getParentIndex(index).then(v => result.parentIndex = v),
            table.getMaterialIndex(index).then(v => result.materialIndex = v),
        ])
        
        if (recursive) {
            await Promise.all([
                table.getParent(index).then(v => result.parent = v),
                table.getMaterial(index).then(v => result.material = v),
            ])
        }
        
        return result
    }
}

export class CategoryTable implements ICategoryTable {
    private document: VimDocument
    private entityTable: EntityTable
    
    static async createFromDocument(document: VimDocument): Promise<ICategoryTable | undefined> {
        const entity = await document.entities.getBfast("Vim.Category")
        
        if (!entity) {
            return undefined
        }
        
        let table = new CategoryTable()
        table.document = document
        table.entityTable = new EntityTable(entity, document.strings)
        
        return table
    }
    
    async getCount(): Promise<number> {
        return (await this.entityTable.getArray("string:Name"))?.length ?? 0
    }
    
    async get(categoryIndex: number, recursive?: boolean): Promise<ICategory> {
        return await Category.createFromTable(this, categoryIndex, recursive)
    }
    
    async getAll(): Promise<ICategory[]> {
        const localTable = await this.entityTable.getLocal()
        
        let name: string[] | undefined
        let id: number[] | undefined
        let categoryType: string[] | undefined
        const lineColorConverter = new Converters.Vector3Converter()
        let lineColor: Vector3[] | undefined
        let builtInCategory: string[] | undefined
        let parentIndex: number[] | undefined
        let materialIndex: number[] | undefined
        
        await Promise.all([
            localTable.getStringArray("string:Name").then(a => name = a),
            localTable.getArray("int:Id").then(a => id = a),
            localTable.getStringArray("string:CategoryType").then(a => categoryType = a),
            Promise.all(lineColorConverter.columns.map(c => this.entityTable.getArray("double:LineColor" + c)))
                .then(a => lineColor = Converters.convertArray(lineColorConverter, a)),
            localTable.getStringArray("string:BuiltInCategory").then(a => builtInCategory = a),
            localTable.getArray("index:Vim.Category:Parent").then(a => parentIndex = a),
            localTable.getArray("index:Vim.Material:Material").then(a => materialIndex = a),
        ])
        
        let category: ICategory[] = []
        
        for (let i = 0; i <= name!.length; i++) {
            category.push({
                index: i,
                name: name ? name[i] : undefined,
                id: id ? id[i] : undefined,
                categoryType: categoryType ? categoryType[i] : undefined,
                lineColor: lineColor ? lineColor[i] : undefined,
                builtInCategory: builtInCategory ? builtInCategory[i] : undefined,
                parentIndex: parentIndex ? parentIndex[i] : undefined,
                materialIndex: materialIndex ? materialIndex[i] : undefined
            })
        }
        
        return category
    }
    
    async getName(categoryIndex: number): Promise<string | undefined>{
        return await this.entityTable.getString(categoryIndex, "string:Name")
    }
    
    async getAllName(): Promise<string[] | undefined>{
        return await this.entityTable.getStringArray("string:Name")
    }
    
    async getId(categoryIndex: number): Promise<number | undefined>{
        return await this.entityTable.getNumber(categoryIndex, "int:Id")
    }
    
    async getAllId(): Promise<number[] | undefined>{
        return await this.entityTable.getArray("int:Id")
    }
    
    async getCategoryType(categoryIndex: number): Promise<string | undefined>{
        return await this.entityTable.getString(categoryIndex, "string:CategoryType")
    }
    
    async getAllCategoryType(): Promise<string[] | undefined>{
        return await this.entityTable.getStringArray("string:CategoryType")
    }
    
    async getLineColor(categoryIndex: number): Promise<Vector3 | undefined>{
        const converter = new Converters.Vector3Converter()
        
        let numbers = await Promise.all(converter.columns.map(c => this.entityTable.getNumber(categoryIndex, "double:LineColor" + c)))
        
        return Converters.convert(converter, numbers)
    }
    
    async getAllLineColor(): Promise<Vector3[] | undefined>{
        const converter = new Converters.Vector3Converter()
        
        let numbers = await Promise.all(converter.columns.map(c => this.entityTable.getArray("double:LineColor" + c)))
        
        return Converters.convertArray(converter, numbers)
    }
    
    async getBuiltInCategory(categoryIndex: number): Promise<string | undefined>{
        return await this.entityTable.getString(categoryIndex, "string:BuiltInCategory")
    }
    
    async getAllBuiltInCategory(): Promise<string[] | undefined>{
        return await this.entityTable.getStringArray("string:BuiltInCategory")
    }
    
    async getParentIndex(categoryIndex: number): Promise<number | undefined> {
        return await this.entityTable.getNumber(categoryIndex, "index:Vim.Category:Parent")
    }
    
    async getAllParentIndex(): Promise<number[] | undefined> {
        return await this.entityTable.getArray("index:Vim.Category:Parent")
    }
    
    async getParent(categoryIndex: number, recursive?: boolean): Promise<ICategory | undefined> {
        const index = await this.getParentIndex(categoryIndex)
        
        if (index === undefined) {
            return undefined
        }
        
        return await this.document.category?.get(index, recursive)
    }
    
    async getMaterialIndex(categoryIndex: number): Promise<number | undefined> {
        return await this.entityTable.getNumber(categoryIndex, "index:Vim.Material:Material")
    }
    
    async getAllMaterialIndex(): Promise<number[] | undefined> {
        return await this.entityTable.getArray("index:Vim.Material:Material")
    }
    
    async getMaterial(categoryIndex: number, recursive?: boolean): Promise<IMaterial | undefined> {
        const index = await this.getMaterialIndex(categoryIndex)
        
        if (index === undefined) {
            return undefined
        }
        
        return await this.document.material?.get(index, recursive)
    }
    
}

export interface IFamily {
    index: number
    structuralMaterialType?: string
    structuralSectionShape?: string
    isSystemFamily?: boolean
    isInPlace?: boolean
    
    familyCategoryIndex?: number
    familyCategory?: ICategory
    elementIndex?: number
    element?: IElement
}

export interface IFamilyTable {
    getCount(): Promise<number>
    get(familyIndex: number, recursive?: boolean): Promise<IFamily>
    getAll(): Promise<IFamily[]>
    
    getStructuralMaterialType(familyIndex: number): Promise<string | undefined>
    getAllStructuralMaterialType(): Promise<string[] | undefined>
    getStructuralSectionShape(familyIndex: number): Promise<string | undefined>
    getAllStructuralSectionShape(): Promise<string[] | undefined>
    getIsSystemFamily(familyIndex: number): Promise<boolean | undefined>
    getAllIsSystemFamily(): Promise<boolean[] | undefined>
    getIsInPlace(familyIndex: number): Promise<boolean | undefined>
    getAllIsInPlace(): Promise<boolean[] | undefined>
    
    getFamilyCategoryIndex(familyIndex: number): Promise<number | undefined>
    getAllFamilyCategoryIndex(): Promise<number[] | undefined>
    getFamilyCategory(familyIndex: number, recursive?: boolean): Promise<ICategory | undefined>
    getElementIndex(familyIndex: number): Promise<number | undefined>
    getAllElementIndex(): Promise<number[] | undefined>
    getElement(familyIndex: number, recursive?: boolean): Promise<IElement | undefined>
}

export class Family implements IFamily {
    index: number
    structuralMaterialType?: string
    structuralSectionShape?: string
    isSystemFamily?: boolean
    isInPlace?: boolean
    
    familyCategoryIndex?: number
    familyCategory?: ICategory
    elementIndex?: number
    element?: IElement
    
    static async createFromTable(table: IFamilyTable, index: number, recursive: boolean = false): Promise<IFamily> {
        let result = new Family()
        result.index = index
        
        await Promise.all([
            table.getStructuralMaterialType(index).then(v => result.structuralMaterialType = v),
            table.getStructuralSectionShape(index).then(v => result.structuralSectionShape = v),
            table.getIsSystemFamily(index).then(v => result.isSystemFamily = v),
            table.getIsInPlace(index).then(v => result.isInPlace = v),
            table.getFamilyCategoryIndex(index).then(v => result.familyCategoryIndex = v),
            table.getElementIndex(index).then(v => result.elementIndex = v),
        ])
        
        if (recursive) {
            await Promise.all([
                table.getFamilyCategory(index).then(v => result.familyCategory = v),
                table.getElement(index).then(v => result.element = v),
            ])
        }
        
        return result
    }
}

export class FamilyTable implements IFamilyTable {
    private document: VimDocument
    private entityTable: EntityTable
    
    static async createFromDocument(document: VimDocument): Promise<IFamilyTable | undefined> {
        const entity = await document.entities.getBfast("Vim.Family")
        
        if (!entity) {
            return undefined
        }
        
        let table = new FamilyTable()
        table.document = document
        table.entityTable = new EntityTable(entity, document.strings)
        
        return table
    }
    
    async getCount(): Promise<number> {
        return (await this.entityTable.getArray("string:StructuralMaterialType"))?.length ?? 0
    }
    
    async get(familyIndex: number, recursive?: boolean): Promise<IFamily> {
        return await Family.createFromTable(this, familyIndex, recursive)
    }
    
    async getAll(): Promise<IFamily[]> {
        const localTable = await this.entityTable.getLocal()
        
        let structuralMaterialType: string[] | undefined
        let structuralSectionShape: string[] | undefined
        let isSystemFamily: boolean[] | undefined
        let isInPlace: boolean[] | undefined
        let familyCategoryIndex: number[] | undefined
        let elementIndex: number[] | undefined
        
        await Promise.all([
            localTable.getStringArray("string:StructuralMaterialType").then(a => structuralMaterialType = a),
            localTable.getStringArray("string:StructuralSectionShape").then(a => structuralSectionShape = a),
            localTable.getBooleanArray("byte:IsSystemFamily").then(a => isSystemFamily = a),
            localTable.getBooleanArray("byte:IsInPlace").then(a => isInPlace = a),
            localTable.getArray("index:Vim.Category:FamilyCategory").then(a => familyCategoryIndex = a),
            localTable.getArray("index:Vim.Element:Element").then(a => elementIndex = a),
        ])
        
        let family: IFamily[] = []
        
        for (let i = 0; i <= structuralMaterialType!.length; i++) {
            family.push({
                index: i,
                structuralMaterialType: structuralMaterialType ? structuralMaterialType[i] : undefined,
                structuralSectionShape: structuralSectionShape ? structuralSectionShape[i] : undefined,
                isSystemFamily: isSystemFamily ? isSystemFamily[i] : undefined,
                isInPlace: isInPlace ? isInPlace[i] : undefined,
                familyCategoryIndex: familyCategoryIndex ? familyCategoryIndex[i] : undefined,
                elementIndex: elementIndex ? elementIndex[i] : undefined
            })
        }
        
        return family
    }
    
    async getStructuralMaterialType(familyIndex: number): Promise<string | undefined>{
        return await this.entityTable.getString(familyIndex, "string:StructuralMaterialType")
    }
    
    async getAllStructuralMaterialType(): Promise<string[] | undefined>{
        return await this.entityTable.getStringArray("string:StructuralMaterialType")
    }
    
    async getStructuralSectionShape(familyIndex: number): Promise<string | undefined>{
        return await this.entityTable.getString(familyIndex, "string:StructuralSectionShape")
    }
    
    async getAllStructuralSectionShape(): Promise<string[] | undefined>{
        return await this.entityTable.getStringArray("string:StructuralSectionShape")
    }
    
    async getIsSystemFamily(familyIndex: number): Promise<boolean | undefined>{
        return await this.entityTable.getBoolean(familyIndex, "byte:IsSystemFamily")
    }
    
    async getAllIsSystemFamily(): Promise<boolean[] | undefined>{
        return await this.entityTable.getBooleanArray("byte:IsSystemFamily")
    }
    
    async getIsInPlace(familyIndex: number): Promise<boolean | undefined>{
        return await this.entityTable.getBoolean(familyIndex, "byte:IsInPlace")
    }
    
    async getAllIsInPlace(): Promise<boolean[] | undefined>{
        return await this.entityTable.getBooleanArray("byte:IsInPlace")
    }
    
    async getFamilyCategoryIndex(familyIndex: number): Promise<number | undefined> {
        return await this.entityTable.getNumber(familyIndex, "index:Vim.Category:FamilyCategory")
    }
    
    async getAllFamilyCategoryIndex(): Promise<number[] | undefined> {
        return await this.entityTable.getArray("index:Vim.Category:FamilyCategory")
    }
    
    async getFamilyCategory(familyIndex: number, recursive?: boolean): Promise<ICategory | undefined> {
        const index = await this.getFamilyCategoryIndex(familyIndex)
        
        if (index === undefined) {
            return undefined
        }
        
        return await this.document.category?.get(index, recursive)
    }
    
    async getElementIndex(familyIndex: number): Promise<number | undefined> {
        return await this.entityTable.getNumber(familyIndex, "index:Vim.Element:Element")
    }
    
    async getAllElementIndex(): Promise<number[] | undefined> {
        return await this.entityTable.getArray("index:Vim.Element:Element")
    }
    
    async getElement(familyIndex: number, recursive?: boolean): Promise<IElement | undefined> {
        const index = await this.getElementIndex(familyIndex)
        
        if (index === undefined) {
            return undefined
        }
        
        return await this.document.element?.get(index, recursive)
    }
    
}

export interface IFamilyType {
    index: number
    isSystemFamilyType?: boolean
    
    familyIndex?: number
    family?: IFamily
    compoundStructureIndex?: number
    compoundStructure?: ICompoundStructure
    elementIndex?: number
    element?: IElement
}

export interface IFamilyTypeTable {
    getCount(): Promise<number>
    get(familyTypeIndex: number, recursive?: boolean): Promise<IFamilyType>
    getAll(): Promise<IFamilyType[]>
    
    getIsSystemFamilyType(familyTypeIndex: number): Promise<boolean | undefined>
    getAllIsSystemFamilyType(): Promise<boolean[] | undefined>
    
    getFamilyIndex(familyTypeIndex: number): Promise<number | undefined>
    getAllFamilyIndex(): Promise<number[] | undefined>
    getFamily(familyTypeIndex: number, recursive?: boolean): Promise<IFamily | undefined>
    getCompoundStructureIndex(familyTypeIndex: number): Promise<number | undefined>
    getAllCompoundStructureIndex(): Promise<number[] | undefined>
    getCompoundStructure(familyTypeIndex: number, recursive?: boolean): Promise<ICompoundStructure | undefined>
    getElementIndex(familyTypeIndex: number): Promise<number | undefined>
    getAllElementIndex(): Promise<number[] | undefined>
    getElement(familyTypeIndex: number, recursive?: boolean): Promise<IElement | undefined>
}

export class FamilyType implements IFamilyType {
    index: number
    isSystemFamilyType?: boolean
    
    familyIndex?: number
    family?: IFamily
    compoundStructureIndex?: number
    compoundStructure?: ICompoundStructure
    elementIndex?: number
    element?: IElement
    
    static async createFromTable(table: IFamilyTypeTable, index: number, recursive: boolean = false): Promise<IFamilyType> {
        let result = new FamilyType()
        result.index = index
        
        await Promise.all([
            table.getIsSystemFamilyType(index).then(v => result.isSystemFamilyType = v),
            table.getFamilyIndex(index).then(v => result.familyIndex = v),
            table.getCompoundStructureIndex(index).then(v => result.compoundStructureIndex = v),
            table.getElementIndex(index).then(v => result.elementIndex = v),
        ])
        
        if (recursive) {
            await Promise.all([
                table.getFamily(index).then(v => result.family = v),
                table.getCompoundStructure(index).then(v => result.compoundStructure = v),
                table.getElement(index).then(v => result.element = v),
            ])
        }
        
        return result
    }
}

export class FamilyTypeTable implements IFamilyTypeTable {
    private document: VimDocument
    private entityTable: EntityTable
    
    static async createFromDocument(document: VimDocument): Promise<IFamilyTypeTable | undefined> {
        const entity = await document.entities.getBfast("Vim.FamilyType")
        
        if (!entity) {
            return undefined
        }
        
        let table = new FamilyTypeTable()
        table.document = document
        table.entityTable = new EntityTable(entity, document.strings)
        
        return table
    }
    
    async getCount(): Promise<number> {
        return (await this.entityTable.getArray("byte:IsSystemFamilyType"))?.length ?? 0
    }
    
    async get(familyTypeIndex: number, recursive?: boolean): Promise<IFamilyType> {
        return await FamilyType.createFromTable(this, familyTypeIndex, recursive)
    }
    
    async getAll(): Promise<IFamilyType[]> {
        const localTable = await this.entityTable.getLocal()
        
        let isSystemFamilyType: boolean[] | undefined
        let familyIndex: number[] | undefined
        let compoundStructureIndex: number[] | undefined
        let elementIndex: number[] | undefined
        
        await Promise.all([
            localTable.getBooleanArray("byte:IsSystemFamilyType").then(a => isSystemFamilyType = a),
            localTable.getArray("index:Vim.Family:Family").then(a => familyIndex = a),
            localTable.getArray("index:Vim.CompoundStructure:CompoundStructure").then(a => compoundStructureIndex = a),
            localTable.getArray("index:Vim.Element:Element").then(a => elementIndex = a),
        ])
        
        let familyType: IFamilyType[] = []
        
        for (let i = 0; i <= isSystemFamilyType!.length; i++) {
            familyType.push({
                index: i,
                isSystemFamilyType: isSystemFamilyType ? isSystemFamilyType[i] : undefined,
                familyIndex: familyIndex ? familyIndex[i] : undefined,
                compoundStructureIndex: compoundStructureIndex ? compoundStructureIndex[i] : undefined,
                elementIndex: elementIndex ? elementIndex[i] : undefined
            })
        }
        
        return familyType
    }
    
    async getIsSystemFamilyType(familyTypeIndex: number): Promise<boolean | undefined>{
        return await this.entityTable.getBoolean(familyTypeIndex, "byte:IsSystemFamilyType")
    }
    
    async getAllIsSystemFamilyType(): Promise<boolean[] | undefined>{
        return await this.entityTable.getBooleanArray("byte:IsSystemFamilyType")
    }
    
    async getFamilyIndex(familyTypeIndex: number): Promise<number | undefined> {
        return await this.entityTable.getNumber(familyTypeIndex, "index:Vim.Family:Family")
    }
    
    async getAllFamilyIndex(): Promise<number[] | undefined> {
        return await this.entityTable.getArray("index:Vim.Family:Family")
    }
    
    async getFamily(familyTypeIndex: number, recursive?: boolean): Promise<IFamily | undefined> {
        const index = await this.getFamilyIndex(familyTypeIndex)
        
        if (index === undefined) {
            return undefined
        }
        
        return await this.document.family?.get(index, recursive)
    }
    
    async getCompoundStructureIndex(familyTypeIndex: number): Promise<number | undefined> {
        return await this.entityTable.getNumber(familyTypeIndex, "index:Vim.CompoundStructure:CompoundStructure")
    }
    
    async getAllCompoundStructureIndex(): Promise<number[] | undefined> {
        return await this.entityTable.getArray("index:Vim.CompoundStructure:CompoundStructure")
    }
    
    async getCompoundStructure(familyTypeIndex: number, recursive?: boolean): Promise<ICompoundStructure | undefined> {
        const index = await this.getCompoundStructureIndex(familyTypeIndex)
        
        if (index === undefined) {
            return undefined
        }
        
        return await this.document.compoundStructure?.get(index, recursive)
    }
    
    async getElementIndex(familyTypeIndex: number): Promise<number | undefined> {
        return await this.entityTable.getNumber(familyTypeIndex, "index:Vim.Element:Element")
    }
    
    async getAllElementIndex(): Promise<number[] | undefined> {
        return await this.entityTable.getArray("index:Vim.Element:Element")
    }
    
    async getElement(familyTypeIndex: number, recursive?: boolean): Promise<IElement | undefined> {
        const index = await this.getElementIndex(familyTypeIndex)
        
        if (index === undefined) {
            return undefined
        }
        
        return await this.document.element?.get(index, recursive)
    }
    
}

export interface IFamilyInstance {
    index: number
    facingFlipped?: boolean
    facingOrientation?: Vector3
    handFlipped?: boolean
    mirrored?: boolean
    hasModifiedGeometry?: boolean
    scale?: number
    basisX?: Vector3
    basisY?: Vector3
    basisZ?: Vector3
    translation?: Vector3
    handOrientation?: Vector3
    
    familyTypeIndex?: number
    familyType?: IFamilyType
    hostIndex?: number
    host?: IElement
    fromRoomIndex?: number
    fromRoom?: IRoom
    toRoomIndex?: number
    toRoom?: IRoom
    elementIndex?: number
    element?: IElement
}

export interface IFamilyInstanceTable {
    getCount(): Promise<number>
    get(familyInstanceIndex: number, recursive?: boolean): Promise<IFamilyInstance>
    getAll(): Promise<IFamilyInstance[]>
    
    getFacingFlipped(familyInstanceIndex: number): Promise<boolean | undefined>
    getAllFacingFlipped(): Promise<boolean[] | undefined>
    getFacingOrientation(familyInstanceIndex: number): Promise<Vector3 | undefined>
    getAllFacingOrientation(): Promise<Vector3[] | undefined>
    getHandFlipped(familyInstanceIndex: number): Promise<boolean | undefined>
    getAllHandFlipped(): Promise<boolean[] | undefined>
    getMirrored(familyInstanceIndex: number): Promise<boolean | undefined>
    getAllMirrored(): Promise<boolean[] | undefined>
    getHasModifiedGeometry(familyInstanceIndex: number): Promise<boolean | undefined>
    getAllHasModifiedGeometry(): Promise<boolean[] | undefined>
    getScale(familyInstanceIndex: number): Promise<number | undefined>
    getAllScale(): Promise<number[] | undefined>
    getBasisX(familyInstanceIndex: number): Promise<Vector3 | undefined>
    getAllBasisX(): Promise<Vector3[] | undefined>
    getBasisY(familyInstanceIndex: number): Promise<Vector3 | undefined>
    getAllBasisY(): Promise<Vector3[] | undefined>
    getBasisZ(familyInstanceIndex: number): Promise<Vector3 | undefined>
    getAllBasisZ(): Promise<Vector3[] | undefined>
    getTranslation(familyInstanceIndex: number): Promise<Vector3 | undefined>
    getAllTranslation(): Promise<Vector3[] | undefined>
    getHandOrientation(familyInstanceIndex: number): Promise<Vector3 | undefined>
    getAllHandOrientation(): Promise<Vector3[] | undefined>
    
    getFamilyTypeIndex(familyInstanceIndex: number): Promise<number | undefined>
    getAllFamilyTypeIndex(): Promise<number[] | undefined>
    getFamilyType(familyInstanceIndex: number, recursive?: boolean): Promise<IFamilyType | undefined>
    getHostIndex(familyInstanceIndex: number): Promise<number | undefined>
    getAllHostIndex(): Promise<number[] | undefined>
    getHost(familyInstanceIndex: number, recursive?: boolean): Promise<IElement | undefined>
    getFromRoomIndex(familyInstanceIndex: number): Promise<number | undefined>
    getAllFromRoomIndex(): Promise<number[] | undefined>
    getFromRoom(familyInstanceIndex: number, recursive?: boolean): Promise<IRoom | undefined>
    getToRoomIndex(familyInstanceIndex: number): Promise<number | undefined>
    getAllToRoomIndex(): Promise<number[] | undefined>
    getToRoom(familyInstanceIndex: number, recursive?: boolean): Promise<IRoom | undefined>
    getElementIndex(familyInstanceIndex: number): Promise<number | undefined>
    getAllElementIndex(): Promise<number[] | undefined>
    getElement(familyInstanceIndex: number, recursive?: boolean): Promise<IElement | undefined>
}

export class FamilyInstance implements IFamilyInstance {
    index: number
    facingFlipped?: boolean
    facingOrientation?: Vector3
    handFlipped?: boolean
    mirrored?: boolean
    hasModifiedGeometry?: boolean
    scale?: number
    basisX?: Vector3
    basisY?: Vector3
    basisZ?: Vector3
    translation?: Vector3
    handOrientation?: Vector3
    
    familyTypeIndex?: number
    familyType?: IFamilyType
    hostIndex?: number
    host?: IElement
    fromRoomIndex?: number
    fromRoom?: IRoom
    toRoomIndex?: number
    toRoom?: IRoom
    elementIndex?: number
    element?: IElement
    
    static async createFromTable(table: IFamilyInstanceTable, index: number, recursive: boolean = false): Promise<IFamilyInstance> {
        let result = new FamilyInstance()
        result.index = index
        
        await Promise.all([
            table.getFacingFlipped(index).then(v => result.facingFlipped = v),
            table.getFacingOrientation(index).then(v => result.facingOrientation = v),
            table.getHandFlipped(index).then(v => result.handFlipped = v),
            table.getMirrored(index).then(v => result.mirrored = v),
            table.getHasModifiedGeometry(index).then(v => result.hasModifiedGeometry = v),
            table.getScale(index).then(v => result.scale = v),
            table.getBasisX(index).then(v => result.basisX = v),
            table.getBasisY(index).then(v => result.basisY = v),
            table.getBasisZ(index).then(v => result.basisZ = v),
            table.getTranslation(index).then(v => result.translation = v),
            table.getHandOrientation(index).then(v => result.handOrientation = v),
            table.getFamilyTypeIndex(index).then(v => result.familyTypeIndex = v),
            table.getHostIndex(index).then(v => result.hostIndex = v),
            table.getFromRoomIndex(index).then(v => result.fromRoomIndex = v),
            table.getToRoomIndex(index).then(v => result.toRoomIndex = v),
            table.getElementIndex(index).then(v => result.elementIndex = v),
        ])
        
        if (recursive) {
            await Promise.all([
                table.getFamilyType(index).then(v => result.familyType = v),
                table.getHost(index).then(v => result.host = v),
                table.getFromRoom(index).then(v => result.fromRoom = v),
                table.getToRoom(index).then(v => result.toRoom = v),
                table.getElement(index).then(v => result.element = v),
            ])
        }
        
        return result
    }
}

export class FamilyInstanceTable implements IFamilyInstanceTable {
    private document: VimDocument
    private entityTable: EntityTable
    
    static async createFromDocument(document: VimDocument): Promise<IFamilyInstanceTable | undefined> {
        const entity = await document.entities.getBfast("Vim.FamilyInstance")
        
        if (!entity) {
            return undefined
        }
        
        let table = new FamilyInstanceTable()
        table.document = document
        table.entityTable = new EntityTable(entity, document.strings)
        
        return table
    }
    
    async getCount(): Promise<number> {
        return (await this.entityTable.getArray("byte:FacingFlipped"))?.length ?? 0
    }
    
    async get(familyInstanceIndex: number, recursive?: boolean): Promise<IFamilyInstance> {
        return await FamilyInstance.createFromTable(this, familyInstanceIndex, recursive)
    }
    
    async getAll(): Promise<IFamilyInstance[]> {
        const localTable = await this.entityTable.getLocal()
        
        let facingFlipped: boolean[] | undefined
        const facingOrientationConverter = new Converters.Vector3Converter()
        let facingOrientation: Vector3[] | undefined
        let handFlipped: boolean[] | undefined
        let mirrored: boolean[] | undefined
        let hasModifiedGeometry: boolean[] | undefined
        let scale: number[] | undefined
        const basisXConverter = new Converters.Vector3Converter()
        let basisX: Vector3[] | undefined
        const basisYConverter = new Converters.Vector3Converter()
        let basisY: Vector3[] | undefined
        const basisZConverter = new Converters.Vector3Converter()
        let basisZ: Vector3[] | undefined
        const translationConverter = new Converters.Vector3Converter()
        let translation: Vector3[] | undefined
        const handOrientationConverter = new Converters.Vector3Converter()
        let handOrientation: Vector3[] | undefined
        let familyTypeIndex: number[] | undefined
        let hostIndex: number[] | undefined
        let fromRoomIndex: number[] | undefined
        let toRoomIndex: number[] | undefined
        let elementIndex: number[] | undefined
        
        await Promise.all([
            localTable.getBooleanArray("byte:FacingFlipped").then(a => facingFlipped = a),
            Promise.all(facingOrientationConverter.columns.map(c => this.entityTable.getArray("float:FacingOrientation" + c)))
                .then(a => facingOrientation = Converters.convertArray(facingOrientationConverter, a)),
            localTable.getBooleanArray("byte:HandFlipped").then(a => handFlipped = a),
            localTable.getBooleanArray("byte:Mirrored").then(a => mirrored = a),
            localTable.getBooleanArray("byte:HasModifiedGeometry").then(a => hasModifiedGeometry = a),
            localTable.getArray("float:Scale").then(a => scale = a),
            Promise.all(basisXConverter.columns.map(c => this.entityTable.getArray("float:BasisX" + c)))
                .then(a => basisX = Converters.convertArray(basisXConverter, a)),
            Promise.all(basisYConverter.columns.map(c => this.entityTable.getArray("float:BasisY" + c)))
                .then(a => basisY = Converters.convertArray(basisYConverter, a)),
            Promise.all(basisZConverter.columns.map(c => this.entityTable.getArray("float:BasisZ" + c)))
                .then(a => basisZ = Converters.convertArray(basisZConverter, a)),
            Promise.all(translationConverter.columns.map(c => this.entityTable.getArray("float:Translation" + c)))
                .then(a => translation = Converters.convertArray(translationConverter, a)),
            Promise.all(handOrientationConverter.columns.map(c => this.entityTable.getArray("float:HandOrientation" + c)))
                .then(a => handOrientation = Converters.convertArray(handOrientationConverter, a)),
            localTable.getArray("index:Vim.FamilyType:FamilyType").then(a => familyTypeIndex = a),
            localTable.getArray("index:Vim.Element:Host").then(a => hostIndex = a),
            localTable.getArray("index:Vim.Room:FromRoom").then(a => fromRoomIndex = a),
            localTable.getArray("index:Vim.Room:ToRoom").then(a => toRoomIndex = a),
            localTable.getArray("index:Vim.Element:Element").then(a => elementIndex = a),
        ])
        
        let familyInstance: IFamilyInstance[] = []
        
        for (let i = 0; i <= facingFlipped!.length; i++) {
            familyInstance.push({
                index: i,
                facingFlipped: facingFlipped ? facingFlipped[i] : undefined,
                facingOrientation: facingOrientation ? facingOrientation[i] : undefined,
                handFlipped: handFlipped ? handFlipped[i] : undefined,
                mirrored: mirrored ? mirrored[i] : undefined,
                hasModifiedGeometry: hasModifiedGeometry ? hasModifiedGeometry[i] : undefined,
                scale: scale ? scale[i] : undefined,
                basisX: basisX ? basisX[i] : undefined,
                basisY: basisY ? basisY[i] : undefined,
                basisZ: basisZ ? basisZ[i] : undefined,
                translation: translation ? translation[i] : undefined,
                handOrientation: handOrientation ? handOrientation[i] : undefined,
                familyTypeIndex: familyTypeIndex ? familyTypeIndex[i] : undefined,
                hostIndex: hostIndex ? hostIndex[i] : undefined,
                fromRoomIndex: fromRoomIndex ? fromRoomIndex[i] : undefined,
                toRoomIndex: toRoomIndex ? toRoomIndex[i] : undefined,
                elementIndex: elementIndex ? elementIndex[i] : undefined
            })
        }
        
        return familyInstance
    }
    
    async getFacingFlipped(familyInstanceIndex: number): Promise<boolean | undefined>{
        return await this.entityTable.getBoolean(familyInstanceIndex, "byte:FacingFlipped")
    }
    
    async getAllFacingFlipped(): Promise<boolean[] | undefined>{
        return await this.entityTable.getBooleanArray("byte:FacingFlipped")
    }
    
    async getFacingOrientation(familyInstanceIndex: number): Promise<Vector3 | undefined>{
        const converter = new Converters.Vector3Converter()
        
        let numbers = await Promise.all(converter.columns.map(c => this.entityTable.getNumber(familyInstanceIndex, "float:FacingOrientation" + c)))
        
        return Converters.convert(converter, numbers)
    }
    
    async getAllFacingOrientation(): Promise<Vector3[] | undefined>{
        const converter = new Converters.Vector3Converter()
        
        let numbers = await Promise.all(converter.columns.map(c => this.entityTable.getArray("float:FacingOrientation" + c)))
        
        return Converters.convertArray(converter, numbers)
    }
    
    async getHandFlipped(familyInstanceIndex: number): Promise<boolean | undefined>{
        return await this.entityTable.getBoolean(familyInstanceIndex, "byte:HandFlipped")
    }
    
    async getAllHandFlipped(): Promise<boolean[] | undefined>{
        return await this.entityTable.getBooleanArray("byte:HandFlipped")
    }
    
    async getMirrored(familyInstanceIndex: number): Promise<boolean | undefined>{
        return await this.entityTable.getBoolean(familyInstanceIndex, "byte:Mirrored")
    }
    
    async getAllMirrored(): Promise<boolean[] | undefined>{
        return await this.entityTable.getBooleanArray("byte:Mirrored")
    }
    
    async getHasModifiedGeometry(familyInstanceIndex: number): Promise<boolean | undefined>{
        return await this.entityTable.getBoolean(familyInstanceIndex, "byte:HasModifiedGeometry")
    }
    
    async getAllHasModifiedGeometry(): Promise<boolean[] | undefined>{
        return await this.entityTable.getBooleanArray("byte:HasModifiedGeometry")
    }
    
    async getScale(familyInstanceIndex: number): Promise<number | undefined>{
        return await this.entityTable.getNumber(familyInstanceIndex, "float:Scale")
    }
    
    async getAllScale(): Promise<number[] | undefined>{
        return await this.entityTable.getArray("float:Scale")
    }
    
    async getBasisX(familyInstanceIndex: number): Promise<Vector3 | undefined>{
        const converter = new Converters.Vector3Converter()
        
        let numbers = await Promise.all(converter.columns.map(c => this.entityTable.getNumber(familyInstanceIndex, "float:BasisX" + c)))
        
        return Converters.convert(converter, numbers)
    }
    
    async getAllBasisX(): Promise<Vector3[] | undefined>{
        const converter = new Converters.Vector3Converter()
        
        let numbers = await Promise.all(converter.columns.map(c => this.entityTable.getArray("float:BasisX" + c)))
        
        return Converters.convertArray(converter, numbers)
    }
    
    async getBasisY(familyInstanceIndex: number): Promise<Vector3 | undefined>{
        const converter = new Converters.Vector3Converter()
        
        let numbers = await Promise.all(converter.columns.map(c => this.entityTable.getNumber(familyInstanceIndex, "float:BasisY" + c)))
        
        return Converters.convert(converter, numbers)
    }
    
    async getAllBasisY(): Promise<Vector3[] | undefined>{
        const converter = new Converters.Vector3Converter()
        
        let numbers = await Promise.all(converter.columns.map(c => this.entityTable.getArray("float:BasisY" + c)))
        
        return Converters.convertArray(converter, numbers)
    }
    
    async getBasisZ(familyInstanceIndex: number): Promise<Vector3 | undefined>{
        const converter = new Converters.Vector3Converter()
        
        let numbers = await Promise.all(converter.columns.map(c => this.entityTable.getNumber(familyInstanceIndex, "float:BasisZ" + c)))
        
        return Converters.convert(converter, numbers)
    }
    
    async getAllBasisZ(): Promise<Vector3[] | undefined>{
        const converter = new Converters.Vector3Converter()
        
        let numbers = await Promise.all(converter.columns.map(c => this.entityTable.getArray("float:BasisZ" + c)))
        
        return Converters.convertArray(converter, numbers)
    }
    
    async getTranslation(familyInstanceIndex: number): Promise<Vector3 | undefined>{
        const converter = new Converters.Vector3Converter()
        
        let numbers = await Promise.all(converter.columns.map(c => this.entityTable.getNumber(familyInstanceIndex, "float:Translation" + c)))
        
        return Converters.convert(converter, numbers)
    }
    
    async getAllTranslation(): Promise<Vector3[] | undefined>{
        const converter = new Converters.Vector3Converter()
        
        let numbers = await Promise.all(converter.columns.map(c => this.entityTable.getArray("float:Translation" + c)))
        
        return Converters.convertArray(converter, numbers)
    }
    
    async getHandOrientation(familyInstanceIndex: number): Promise<Vector3 | undefined>{
        const converter = new Converters.Vector3Converter()
        
        let numbers = await Promise.all(converter.columns.map(c => this.entityTable.getNumber(familyInstanceIndex, "float:HandOrientation" + c)))
        
        return Converters.convert(converter, numbers)
    }
    
    async getAllHandOrientation(): Promise<Vector3[] | undefined>{
        const converter = new Converters.Vector3Converter()
        
        let numbers = await Promise.all(converter.columns.map(c => this.entityTable.getArray("float:HandOrientation" + c)))
        
        return Converters.convertArray(converter, numbers)
    }
    
    async getFamilyTypeIndex(familyInstanceIndex: number): Promise<number | undefined> {
        return await this.entityTable.getNumber(familyInstanceIndex, "index:Vim.FamilyType:FamilyType")
    }
    
    async getAllFamilyTypeIndex(): Promise<number[] | undefined> {
        return await this.entityTable.getArray("index:Vim.FamilyType:FamilyType")
    }
    
    async getFamilyType(familyInstanceIndex: number, recursive?: boolean): Promise<IFamilyType | undefined> {
        const index = await this.getFamilyTypeIndex(familyInstanceIndex)
        
        if (index === undefined) {
            return undefined
        }
        
        return await this.document.familyType?.get(index, recursive)
    }
    
    async getHostIndex(familyInstanceIndex: number): Promise<number | undefined> {
        return await this.entityTable.getNumber(familyInstanceIndex, "index:Vim.Element:Host")
    }
    
    async getAllHostIndex(): Promise<number[] | undefined> {
        return await this.entityTable.getArray("index:Vim.Element:Host")
    }
    
    async getHost(familyInstanceIndex: number, recursive?: boolean): Promise<IElement | undefined> {
        const index = await this.getHostIndex(familyInstanceIndex)
        
        if (index === undefined) {
            return undefined
        }
        
        return await this.document.element?.get(index, recursive)
    }
    
    async getFromRoomIndex(familyInstanceIndex: number): Promise<number | undefined> {
        return await this.entityTable.getNumber(familyInstanceIndex, "index:Vim.Room:FromRoom")
    }
    
    async getAllFromRoomIndex(): Promise<number[] | undefined> {
        return await this.entityTable.getArray("index:Vim.Room:FromRoom")
    }
    
    async getFromRoom(familyInstanceIndex: number, recursive?: boolean): Promise<IRoom | undefined> {
        const index = await this.getFromRoomIndex(familyInstanceIndex)
        
        if (index === undefined) {
            return undefined
        }
        
        return await this.document.room?.get(index, recursive)
    }
    
    async getToRoomIndex(familyInstanceIndex: number): Promise<number | undefined> {
        return await this.entityTable.getNumber(familyInstanceIndex, "index:Vim.Room:ToRoom")
    }
    
    async getAllToRoomIndex(): Promise<number[] | undefined> {
        return await this.entityTable.getArray("index:Vim.Room:ToRoom")
    }
    
    async getToRoom(familyInstanceIndex: number, recursive?: boolean): Promise<IRoom | undefined> {
        const index = await this.getToRoomIndex(familyInstanceIndex)
        
        if (index === undefined) {
            return undefined
        }
        
        return await this.document.room?.get(index, recursive)
    }
    
    async getElementIndex(familyInstanceIndex: number): Promise<number | undefined> {
        return await this.entityTable.getNumber(familyInstanceIndex, "index:Vim.Element:Element")
    }
    
    async getAllElementIndex(): Promise<number[] | undefined> {
        return await this.entityTable.getArray("index:Vim.Element:Element")
    }
    
    async getElement(familyInstanceIndex: number, recursive?: boolean): Promise<IElement | undefined> {
        const index = await this.getElementIndex(familyInstanceIndex)
        
        if (index === undefined) {
            return undefined
        }
        
        return await this.document.element?.get(index, recursive)
    }
    
}

export interface IView {
    index: number
    title?: string
    viewType?: string
    up?: Vector3
    right?: Vector3
    origin?: Vector3
    viewDirection?: Vector3
    viewPosition?: Vector3
    scale?: number
    outline?: AABox2D
    detailLevel?: number
    
    cameraIndex?: number
    camera?: ICamera
    elementIndex?: number
    element?: IElement
}

export interface IViewTable {
    getCount(): Promise<number>
    get(viewIndex: number, recursive?: boolean): Promise<IView>
    getAll(): Promise<IView[]>
    
    getTitle(viewIndex: number): Promise<string | undefined>
    getAllTitle(): Promise<string[] | undefined>
    getViewType(viewIndex: number): Promise<string | undefined>
    getAllViewType(): Promise<string[] | undefined>
    getUp(viewIndex: number): Promise<Vector3 | undefined>
    getAllUp(): Promise<Vector3[] | undefined>
    getRight(viewIndex: number): Promise<Vector3 | undefined>
    getAllRight(): Promise<Vector3[] | undefined>
    getOrigin(viewIndex: number): Promise<Vector3 | undefined>
    getAllOrigin(): Promise<Vector3[] | undefined>
    getViewDirection(viewIndex: number): Promise<Vector3 | undefined>
    getAllViewDirection(): Promise<Vector3[] | undefined>
    getViewPosition(viewIndex: number): Promise<Vector3 | undefined>
    getAllViewPosition(): Promise<Vector3[] | undefined>
    getScale(viewIndex: number): Promise<number | undefined>
    getAllScale(): Promise<number[] | undefined>
    getOutline(viewIndex: number): Promise<AABox2D | undefined>
    getAllOutline(): Promise<AABox2D[] | undefined>
    getDetailLevel(viewIndex: number): Promise<number | undefined>
    getAllDetailLevel(): Promise<number[] | undefined>
    
    getCameraIndex(viewIndex: number): Promise<number | undefined>
    getAllCameraIndex(): Promise<number[] | undefined>
    getCamera(viewIndex: number, recursive?: boolean): Promise<ICamera | undefined>
    getElementIndex(viewIndex: number): Promise<number | undefined>
    getAllElementIndex(): Promise<number[] | undefined>
    getElement(viewIndex: number, recursive?: boolean): Promise<IElement | undefined>
}

export class View implements IView {
    index: number
    title?: string
    viewType?: string
    up?: Vector3
    right?: Vector3
    origin?: Vector3
    viewDirection?: Vector3
    viewPosition?: Vector3
    scale?: number
    outline?: AABox2D
    detailLevel?: number
    
    cameraIndex?: number
    camera?: ICamera
    elementIndex?: number
    element?: IElement
    
    static async createFromTable(table: IViewTable, index: number, recursive: boolean = false): Promise<IView> {
        let result = new View()
        result.index = index
        
        await Promise.all([
            table.getTitle(index).then(v => result.title = v),
            table.getViewType(index).then(v => result.viewType = v),
            table.getUp(index).then(v => result.up = v),
            table.getRight(index).then(v => result.right = v),
            table.getOrigin(index).then(v => result.origin = v),
            table.getViewDirection(index).then(v => result.viewDirection = v),
            table.getViewPosition(index).then(v => result.viewPosition = v),
            table.getScale(index).then(v => result.scale = v),
            table.getOutline(index).then(v => result.outline = v),
            table.getDetailLevel(index).then(v => result.detailLevel = v),
            table.getCameraIndex(index).then(v => result.cameraIndex = v),
            table.getElementIndex(index).then(v => result.elementIndex = v),
        ])
        
        if (recursive) {
            await Promise.all([
                table.getCamera(index).then(v => result.camera = v),
                table.getElement(index).then(v => result.element = v),
            ])
        }
        
        return result
    }
}

export class ViewTable implements IViewTable {
    private document: VimDocument
    private entityTable: EntityTable
    
    static async createFromDocument(document: VimDocument): Promise<IViewTable | undefined> {
        const entity = await document.entities.getBfast("Vim.View")
        
        if (!entity) {
            return undefined
        }
        
        let table = new ViewTable()
        table.document = document
        table.entityTable = new EntityTable(entity, document.strings)
        
        return table
    }
    
    async getCount(): Promise<number> {
        return (await this.entityTable.getArray("string:Title"))?.length ?? 0
    }
    
    async get(viewIndex: number, recursive?: boolean): Promise<IView> {
        return await View.createFromTable(this, viewIndex, recursive)
    }
    
    async getAll(): Promise<IView[]> {
        const localTable = await this.entityTable.getLocal()
        
        let title: string[] | undefined
        let viewType: string[] | undefined
        const upConverter = new Converters.Vector3Converter()
        let up: Vector3[] | undefined
        const rightConverter = new Converters.Vector3Converter()
        let right: Vector3[] | undefined
        const originConverter = new Converters.Vector3Converter()
        let origin: Vector3[] | undefined
        const viewDirectionConverter = new Converters.Vector3Converter()
        let viewDirection: Vector3[] | undefined
        const viewPositionConverter = new Converters.Vector3Converter()
        let viewPosition: Vector3[] | undefined
        let scale: number[] | undefined
        const outlineConverter = new Converters.AABox2DConverter()
        let outline: AABox2D[] | undefined
        let detailLevel: number[] | undefined
        let cameraIndex: number[] | undefined
        let elementIndex: number[] | undefined
        
        await Promise.all([
            localTable.getStringArray("string:Title").then(a => title = a),
            localTable.getStringArray("string:ViewType").then(a => viewType = a),
            Promise.all(upConverter.columns.map(c => this.entityTable.getArray("double:Up" + c)))
                .then(a => up = Converters.convertArray(upConverter, a)),
            Promise.all(rightConverter.columns.map(c => this.entityTable.getArray("double:Right" + c)))
                .then(a => right = Converters.convertArray(rightConverter, a)),
            Promise.all(originConverter.columns.map(c => this.entityTable.getArray("double:Origin" + c)))
                .then(a => origin = Converters.convertArray(originConverter, a)),
            Promise.all(viewDirectionConverter.columns.map(c => this.entityTable.getArray("double:ViewDirection" + c)))
                .then(a => viewDirection = Converters.convertArray(viewDirectionConverter, a)),
            Promise.all(viewPositionConverter.columns.map(c => this.entityTable.getArray("double:ViewPosition" + c)))
                .then(a => viewPosition = Converters.convertArray(viewPositionConverter, a)),
            localTable.getArray("double:Scale").then(a => scale = a),
            Promise.all(outlineConverter.columns.map(c => this.entityTable.getArray("double:Outline" + c)))
                .then(a => outline = Converters.convertArray(outlineConverter, a)),
            localTable.getArray("int:DetailLevel").then(a => detailLevel = a),
            localTable.getArray("index:Vim.Camera:Camera").then(a => cameraIndex = a),
            localTable.getArray("index:Vim.Element:Element").then(a => elementIndex = a),
        ])
        
        let view: IView[] = []
        
        for (let i = 0; i <= title!.length; i++) {
            view.push({
                index: i,
                title: title ? title[i] : undefined,
                viewType: viewType ? viewType[i] : undefined,
                up: up ? up[i] : undefined,
                right: right ? right[i] : undefined,
                origin: origin ? origin[i] : undefined,
                viewDirection: viewDirection ? viewDirection[i] : undefined,
                viewPosition: viewPosition ? viewPosition[i] : undefined,
                scale: scale ? scale[i] : undefined,
                outline: outline ? outline[i] : undefined,
                detailLevel: detailLevel ? detailLevel[i] : undefined,
                cameraIndex: cameraIndex ? cameraIndex[i] : undefined,
                elementIndex: elementIndex ? elementIndex[i] : undefined
            })
        }
        
        return view
    }
    
    async getTitle(viewIndex: number): Promise<string | undefined>{
        return await this.entityTable.getString(viewIndex, "string:Title")
    }
    
    async getAllTitle(): Promise<string[] | undefined>{
        return await this.entityTable.getStringArray("string:Title")
    }
    
    async getViewType(viewIndex: number): Promise<string | undefined>{
        return await this.entityTable.getString(viewIndex, "string:ViewType")
    }
    
    async getAllViewType(): Promise<string[] | undefined>{
        return await this.entityTable.getStringArray("string:ViewType")
    }
    
    async getUp(viewIndex: number): Promise<Vector3 | undefined>{
        const converter = new Converters.Vector3Converter()
        
        let numbers = await Promise.all(converter.columns.map(c => this.entityTable.getNumber(viewIndex, "double:Up" + c)))
        
        return Converters.convert(converter, numbers)
    }
    
    async getAllUp(): Promise<Vector3[] | undefined>{
        const converter = new Converters.Vector3Converter()
        
        let numbers = await Promise.all(converter.columns.map(c => this.entityTable.getArray("double:Up" + c)))
        
        return Converters.convertArray(converter, numbers)
    }
    
    async getRight(viewIndex: number): Promise<Vector3 | undefined>{
        const converter = new Converters.Vector3Converter()
        
        let numbers = await Promise.all(converter.columns.map(c => this.entityTable.getNumber(viewIndex, "double:Right" + c)))
        
        return Converters.convert(converter, numbers)
    }
    
    async getAllRight(): Promise<Vector3[] | undefined>{
        const converter = new Converters.Vector3Converter()
        
        let numbers = await Promise.all(converter.columns.map(c => this.entityTable.getArray("double:Right" + c)))
        
        return Converters.convertArray(converter, numbers)
    }
    
    async getOrigin(viewIndex: number): Promise<Vector3 | undefined>{
        const converter = new Converters.Vector3Converter()
        
        let numbers = await Promise.all(converter.columns.map(c => this.entityTable.getNumber(viewIndex, "double:Origin" + c)))
        
        return Converters.convert(converter, numbers)
    }
    
    async getAllOrigin(): Promise<Vector3[] | undefined>{
        const converter = new Converters.Vector3Converter()
        
        let numbers = await Promise.all(converter.columns.map(c => this.entityTable.getArray("double:Origin" + c)))
        
        return Converters.convertArray(converter, numbers)
    }
    
    async getViewDirection(viewIndex: number): Promise<Vector3 | undefined>{
        const converter = new Converters.Vector3Converter()
        
        let numbers = await Promise.all(converter.columns.map(c => this.entityTable.getNumber(viewIndex, "double:ViewDirection" + c)))
        
        return Converters.convert(converter, numbers)
    }
    
    async getAllViewDirection(): Promise<Vector3[] | undefined>{
        const converter = new Converters.Vector3Converter()
        
        let numbers = await Promise.all(converter.columns.map(c => this.entityTable.getArray("double:ViewDirection" + c)))
        
        return Converters.convertArray(converter, numbers)
    }
    
    async getViewPosition(viewIndex: number): Promise<Vector3 | undefined>{
        const converter = new Converters.Vector3Converter()
        
        let numbers = await Promise.all(converter.columns.map(c => this.entityTable.getNumber(viewIndex, "double:ViewPosition" + c)))
        
        return Converters.convert(converter, numbers)
    }
    
    async getAllViewPosition(): Promise<Vector3[] | undefined>{
        const converter = new Converters.Vector3Converter()
        
        let numbers = await Promise.all(converter.columns.map(c => this.entityTable.getArray("double:ViewPosition" + c)))
        
        return Converters.convertArray(converter, numbers)
    }
    
    async getScale(viewIndex: number): Promise<number | undefined>{
        return await this.entityTable.getNumber(viewIndex, "double:Scale")
    }
    
    async getAllScale(): Promise<number[] | undefined>{
        return await this.entityTable.getArray("double:Scale")
    }
    
    async getOutline(viewIndex: number): Promise<AABox2D | undefined>{
        const converter = new Converters.AABox2DConverter()
        
        let numbers = await Promise.all(converter.columns.map(c => this.entityTable.getNumber(viewIndex, "double:Outline" + c)))
        
        return Converters.convert(converter, numbers)
    }
    
    async getAllOutline(): Promise<AABox2D[] | undefined>{
        const converter = new Converters.AABox2DConverter()
        
        let numbers = await Promise.all(converter.columns.map(c => this.entityTable.getArray("double:Outline" + c)))
        
        return Converters.convertArray(converter, numbers)
    }
    
    async getDetailLevel(viewIndex: number): Promise<number | undefined>{
        return await this.entityTable.getNumber(viewIndex, "int:DetailLevel")
    }
    
    async getAllDetailLevel(): Promise<number[] | undefined>{
        return await this.entityTable.getArray("int:DetailLevel")
    }
    
    async getCameraIndex(viewIndex: number): Promise<number | undefined> {
        return await this.entityTable.getNumber(viewIndex, "index:Vim.Camera:Camera")
    }
    
    async getAllCameraIndex(): Promise<number[] | undefined> {
        return await this.entityTable.getArray("index:Vim.Camera:Camera")
    }
    
    async getCamera(viewIndex: number, recursive?: boolean): Promise<ICamera | undefined> {
        const index = await this.getCameraIndex(viewIndex)
        
        if (index === undefined) {
            return undefined
        }
        
        return await this.document.camera?.get(index, recursive)
    }
    
    async getElementIndex(viewIndex: number): Promise<number | undefined> {
        return await this.entityTable.getNumber(viewIndex, "index:Vim.Element:Element")
    }
    
    async getAllElementIndex(): Promise<number[] | undefined> {
        return await this.entityTable.getArray("index:Vim.Element:Element")
    }
    
    async getElement(viewIndex: number, recursive?: boolean): Promise<IElement | undefined> {
        const index = await this.getElementIndex(viewIndex)
        
        if (index === undefined) {
            return undefined
        }
        
        return await this.document.element?.get(index, recursive)
    }
    
}

export interface IElementInView {
    index: number
    
    viewIndex?: number
    view?: IView
    elementIndex?: number
    element?: IElement
}

export interface IElementInViewTable {
    getCount(): Promise<number>
    get(elementInViewIndex: number, recursive?: boolean): Promise<IElementInView>
    getAll(): Promise<IElementInView[]>
    
    getViewIndex(elementInViewIndex: number): Promise<number | undefined>
    getAllViewIndex(): Promise<number[] | undefined>
    getView(elementInViewIndex: number, recursive?: boolean): Promise<IView | undefined>
    getElementIndex(elementInViewIndex: number): Promise<number | undefined>
    getAllElementIndex(): Promise<number[] | undefined>
    getElement(elementInViewIndex: number, recursive?: boolean): Promise<IElement | undefined>
}

export class ElementInView implements IElementInView {
    index: number
    
    viewIndex?: number
    view?: IView
    elementIndex?: number
    element?: IElement
    
    static async createFromTable(table: IElementInViewTable, index: number, recursive: boolean = false): Promise<IElementInView> {
        let result = new ElementInView()
        result.index = index
        
        await Promise.all([
            table.getViewIndex(index).then(v => result.viewIndex = v),
            table.getElementIndex(index).then(v => result.elementIndex = v),
        ])
        
        if (recursive) {
            await Promise.all([
                table.getView(index).then(v => result.view = v),
                table.getElement(index).then(v => result.element = v),
            ])
        }
        
        return result
    }
}

export class ElementInViewTable implements IElementInViewTable {
    private document: VimDocument
    private entityTable: EntityTable
    
    static async createFromDocument(document: VimDocument): Promise<IElementInViewTable | undefined> {
        const entity = await document.entities.getBfast("Vim.ElementInView")
        
        if (!entity) {
            return undefined
        }
        
        let table = new ElementInViewTable()
        table.document = document
        table.entityTable = new EntityTable(entity, document.strings)
        
        return table
    }
    
    async getCount(): Promise<number> {
        return (await this.entityTable.getArray("index:Vim.View:View"))?.length ?? 0
    }
    
    async get(elementInViewIndex: number, recursive?: boolean): Promise<IElementInView> {
        return await ElementInView.createFromTable(this, elementInViewIndex, recursive)
    }
    
    async getAll(): Promise<IElementInView[]> {
        const localTable = await this.entityTable.getLocal()
        
        let viewIndex: number[] | undefined
        let elementIndex: number[] | undefined
        
        await Promise.all([
            localTable.getArray("index:Vim.View:View").then(a => viewIndex = a),
            localTable.getArray("index:Vim.Element:Element").then(a => elementIndex = a),
        ])
        
        let elementInView: IElementInView[] = []
        
        for (let i = 0; i <= viewIndex!.length; i++) {
            elementInView.push({
                index: i,
                viewIndex: viewIndex ? viewIndex[i] : undefined,
                elementIndex: elementIndex ? elementIndex[i] : undefined
            })
        }
        
        return elementInView
    }
    
    async getViewIndex(elementInViewIndex: number): Promise<number | undefined> {
        return await this.entityTable.getNumber(elementInViewIndex, "index:Vim.View:View")
    }
    
    async getAllViewIndex(): Promise<number[] | undefined> {
        return await this.entityTable.getArray("index:Vim.View:View")
    }
    
    async getView(elementInViewIndex: number, recursive?: boolean): Promise<IView | undefined> {
        const index = await this.getViewIndex(elementInViewIndex)
        
        if (index === undefined) {
            return undefined
        }
        
        return await this.document.view?.get(index, recursive)
    }
    
    async getElementIndex(elementInViewIndex: number): Promise<number | undefined> {
        return await this.entityTable.getNumber(elementInViewIndex, "index:Vim.Element:Element")
    }
    
    async getAllElementIndex(): Promise<number[] | undefined> {
        return await this.entityTable.getArray("index:Vim.Element:Element")
    }
    
    async getElement(elementInViewIndex: number, recursive?: boolean): Promise<IElement | undefined> {
        const index = await this.getElementIndex(elementInViewIndex)
        
        if (index === undefined) {
            return undefined
        }
        
        return await this.document.element?.get(index, recursive)
    }
    
}

export interface IShapeInView {
    index: number
    
    shapeIndex?: number
    shape?: IShape
    viewIndex?: number
    view?: IView
}

export interface IShapeInViewTable {
    getCount(): Promise<number>
    get(shapeInViewIndex: number, recursive?: boolean): Promise<IShapeInView>
    getAll(): Promise<IShapeInView[]>
    
    getShapeIndex(shapeInViewIndex: number): Promise<number | undefined>
    getAllShapeIndex(): Promise<number[] | undefined>
    getShape(shapeInViewIndex: number, recursive?: boolean): Promise<IShape | undefined>
    getViewIndex(shapeInViewIndex: number): Promise<number | undefined>
    getAllViewIndex(): Promise<number[] | undefined>
    getView(shapeInViewIndex: number, recursive?: boolean): Promise<IView | undefined>
}

export class ShapeInView implements IShapeInView {
    index: number
    
    shapeIndex?: number
    shape?: IShape
    viewIndex?: number
    view?: IView
    
    static async createFromTable(table: IShapeInViewTable, index: number, recursive: boolean = false): Promise<IShapeInView> {
        let result = new ShapeInView()
        result.index = index
        
        await Promise.all([
            table.getShapeIndex(index).then(v => result.shapeIndex = v),
            table.getViewIndex(index).then(v => result.viewIndex = v),
        ])
        
        if (recursive) {
            await Promise.all([
                table.getShape(index).then(v => result.shape = v),
                table.getView(index).then(v => result.view = v),
            ])
        }
        
        return result
    }
}

export class ShapeInViewTable implements IShapeInViewTable {
    private document: VimDocument
    private entityTable: EntityTable
    
    static async createFromDocument(document: VimDocument): Promise<IShapeInViewTable | undefined> {
        const entity = await document.entities.getBfast("Vim.ShapeInView")
        
        if (!entity) {
            return undefined
        }
        
        let table = new ShapeInViewTable()
        table.document = document
        table.entityTable = new EntityTable(entity, document.strings)
        
        return table
    }
    
    async getCount(): Promise<number> {
        return (await this.entityTable.getArray("index:Vim.Shape:Shape"))?.length ?? 0
    }
    
    async get(shapeInViewIndex: number, recursive?: boolean): Promise<IShapeInView> {
        return await ShapeInView.createFromTable(this, shapeInViewIndex, recursive)
    }
    
    async getAll(): Promise<IShapeInView[]> {
        const localTable = await this.entityTable.getLocal()
        
        let shapeIndex: number[] | undefined
        let viewIndex: number[] | undefined
        
        await Promise.all([
            localTable.getArray("index:Vim.Shape:Shape").then(a => shapeIndex = a),
            localTable.getArray("index:Vim.View:View").then(a => viewIndex = a),
        ])
        
        let shapeInView: IShapeInView[] = []
        
        for (let i = 0; i <= shapeIndex!.length; i++) {
            shapeInView.push({
                index: i,
                shapeIndex: shapeIndex ? shapeIndex[i] : undefined,
                viewIndex: viewIndex ? viewIndex[i] : undefined
            })
        }
        
        return shapeInView
    }
    
    async getShapeIndex(shapeInViewIndex: number): Promise<number | undefined> {
        return await this.entityTable.getNumber(shapeInViewIndex, "index:Vim.Shape:Shape")
    }
    
    async getAllShapeIndex(): Promise<number[] | undefined> {
        return await this.entityTable.getArray("index:Vim.Shape:Shape")
    }
    
    async getShape(shapeInViewIndex: number, recursive?: boolean): Promise<IShape | undefined> {
        const index = await this.getShapeIndex(shapeInViewIndex)
        
        if (index === undefined) {
            return undefined
        }
        
        return await this.document.shape?.get(index, recursive)
    }
    
    async getViewIndex(shapeInViewIndex: number): Promise<number | undefined> {
        return await this.entityTable.getNumber(shapeInViewIndex, "index:Vim.View:View")
    }
    
    async getAllViewIndex(): Promise<number[] | undefined> {
        return await this.entityTable.getArray("index:Vim.View:View")
    }
    
    async getView(shapeInViewIndex: number, recursive?: boolean): Promise<IView | undefined> {
        const index = await this.getViewIndex(shapeInViewIndex)
        
        if (index === undefined) {
            return undefined
        }
        
        return await this.document.view?.get(index, recursive)
    }
    
}

export interface IAssetInView {
    index: number
    
    assetIndex?: number
    asset?: IAsset
    viewIndex?: number
    view?: IView
}

export interface IAssetInViewTable {
    getCount(): Promise<number>
    get(assetInViewIndex: number, recursive?: boolean): Promise<IAssetInView>
    getAll(): Promise<IAssetInView[]>
    
    getAssetIndex(assetInViewIndex: number): Promise<number | undefined>
    getAllAssetIndex(): Promise<number[] | undefined>
    getAsset(assetInViewIndex: number, recursive?: boolean): Promise<IAsset | undefined>
    getViewIndex(assetInViewIndex: number): Promise<number | undefined>
    getAllViewIndex(): Promise<number[] | undefined>
    getView(assetInViewIndex: number, recursive?: boolean): Promise<IView | undefined>
}

export class AssetInView implements IAssetInView {
    index: number
    
    assetIndex?: number
    asset?: IAsset
    viewIndex?: number
    view?: IView
    
    static async createFromTable(table: IAssetInViewTable, index: number, recursive: boolean = false): Promise<IAssetInView> {
        let result = new AssetInView()
        result.index = index
        
        await Promise.all([
            table.getAssetIndex(index).then(v => result.assetIndex = v),
            table.getViewIndex(index).then(v => result.viewIndex = v),
        ])
        
        if (recursive) {
            await Promise.all([
                table.getAsset(index).then(v => result.asset = v),
                table.getView(index).then(v => result.view = v),
            ])
        }
        
        return result
    }
}

export class AssetInViewTable implements IAssetInViewTable {
    private document: VimDocument
    private entityTable: EntityTable
    
    static async createFromDocument(document: VimDocument): Promise<IAssetInViewTable | undefined> {
        const entity = await document.entities.getBfast("Vim.AssetInView")
        
        if (!entity) {
            return undefined
        }
        
        let table = new AssetInViewTable()
        table.document = document
        table.entityTable = new EntityTable(entity, document.strings)
        
        return table
    }
    
    async getCount(): Promise<number> {
        return (await this.entityTable.getArray("index:Vim.Asset:Asset"))?.length ?? 0
    }
    
    async get(assetInViewIndex: number, recursive?: boolean): Promise<IAssetInView> {
        return await AssetInView.createFromTable(this, assetInViewIndex, recursive)
    }
    
    async getAll(): Promise<IAssetInView[]> {
        const localTable = await this.entityTable.getLocal()
        
        let assetIndex: number[] | undefined
        let viewIndex: number[] | undefined
        
        await Promise.all([
            localTable.getArray("index:Vim.Asset:Asset").then(a => assetIndex = a),
            localTable.getArray("index:Vim.View:View").then(a => viewIndex = a),
        ])
        
        let assetInView: IAssetInView[] = []
        
        for (let i = 0; i <= assetIndex!.length; i++) {
            assetInView.push({
                index: i,
                assetIndex: assetIndex ? assetIndex[i] : undefined,
                viewIndex: viewIndex ? viewIndex[i] : undefined
            })
        }
        
        return assetInView
    }
    
    async getAssetIndex(assetInViewIndex: number): Promise<number | undefined> {
        return await this.entityTable.getNumber(assetInViewIndex, "index:Vim.Asset:Asset")
    }
    
    async getAllAssetIndex(): Promise<number[] | undefined> {
        return await this.entityTable.getArray("index:Vim.Asset:Asset")
    }
    
    async getAsset(assetInViewIndex: number, recursive?: boolean): Promise<IAsset | undefined> {
        const index = await this.getAssetIndex(assetInViewIndex)
        
        if (index === undefined) {
            return undefined
        }
        
        return await this.document.asset?.get(index, recursive)
    }
    
    async getViewIndex(assetInViewIndex: number): Promise<number | undefined> {
        return await this.entityTable.getNumber(assetInViewIndex, "index:Vim.View:View")
    }
    
    async getAllViewIndex(): Promise<number[] | undefined> {
        return await this.entityTable.getArray("index:Vim.View:View")
    }
    
    async getView(assetInViewIndex: number, recursive?: boolean): Promise<IView | undefined> {
        const index = await this.getViewIndex(assetInViewIndex)
        
        if (index === undefined) {
            return undefined
        }
        
        return await this.document.view?.get(index, recursive)
    }
    
}

export interface ICamera {
    index: number
    id?: number
    isPerspective?: number
    verticalExtent?: number
    horizontalExtent?: number
    farDistance?: number
    nearDistance?: number
    targetDistance?: number
    rightOffset?: number
    upOffset?: number
}

export interface ICameraTable {
    getCount(): Promise<number>
    get(cameraIndex: number, recursive?: boolean): Promise<ICamera>
    getAll(): Promise<ICamera[]>
    
    getId(cameraIndex: number): Promise<number | undefined>
    getAllId(): Promise<number[] | undefined>
    getIsPerspective(cameraIndex: number): Promise<number | undefined>
    getAllIsPerspective(): Promise<number[] | undefined>
    getVerticalExtent(cameraIndex: number): Promise<number | undefined>
    getAllVerticalExtent(): Promise<number[] | undefined>
    getHorizontalExtent(cameraIndex: number): Promise<number | undefined>
    getAllHorizontalExtent(): Promise<number[] | undefined>
    getFarDistance(cameraIndex: number): Promise<number | undefined>
    getAllFarDistance(): Promise<number[] | undefined>
    getNearDistance(cameraIndex: number): Promise<number | undefined>
    getAllNearDistance(): Promise<number[] | undefined>
    getTargetDistance(cameraIndex: number): Promise<number | undefined>
    getAllTargetDistance(): Promise<number[] | undefined>
    getRightOffset(cameraIndex: number): Promise<number | undefined>
    getAllRightOffset(): Promise<number[] | undefined>
    getUpOffset(cameraIndex: number): Promise<number | undefined>
    getAllUpOffset(): Promise<number[] | undefined>
}

export class Camera implements ICamera {
    index: number
    id?: number
    isPerspective?: number
    verticalExtent?: number
    horizontalExtent?: number
    farDistance?: number
    nearDistance?: number
    targetDistance?: number
    rightOffset?: number
    upOffset?: number
    
    static async createFromTable(table: ICameraTable, index: number, recursive: boolean = false): Promise<ICamera> {
        let result = new Camera()
        result.index = index
        
        await Promise.all([
            table.getId(index).then(v => result.id = v),
            table.getIsPerspective(index).then(v => result.isPerspective = v),
            table.getVerticalExtent(index).then(v => result.verticalExtent = v),
            table.getHorizontalExtent(index).then(v => result.horizontalExtent = v),
            table.getFarDistance(index).then(v => result.farDistance = v),
            table.getNearDistance(index).then(v => result.nearDistance = v),
            table.getTargetDistance(index).then(v => result.targetDistance = v),
            table.getRightOffset(index).then(v => result.rightOffset = v),
            table.getUpOffset(index).then(v => result.upOffset = v),
        ])
        
        return result
    }
}

export class CameraTable implements ICameraTable {
    private entityTable: EntityTable
    
    static async createFromDocument(document: VimDocument): Promise<ICameraTable | undefined> {
        const entity = await document.entities.getBfast("Vim.Camera")
        
        if (!entity) {
            return undefined
        }
        
        let table = new CameraTable()
        table.entityTable = new EntityTable(entity, document.strings)
        
        return table
    }
    
    async getCount(): Promise<number> {
        return (await this.entityTable.getArray("int:Id"))?.length ?? 0
    }
    
    async get(cameraIndex: number, recursive?: boolean): Promise<ICamera> {
        return await Camera.createFromTable(this, cameraIndex, recursive)
    }
    
    async getAll(): Promise<ICamera[]> {
        const localTable = await this.entityTable.getLocal()
        
        let id: number[] | undefined
        let isPerspective: number[] | undefined
        let verticalExtent: number[] | undefined
        let horizontalExtent: number[] | undefined
        let farDistance: number[] | undefined
        let nearDistance: number[] | undefined
        let targetDistance: number[] | undefined
        let rightOffset: number[] | undefined
        let upOffset: number[] | undefined
        
        await Promise.all([
            localTable.getArray("int:Id").then(a => id = a),
            localTable.getArray("int:IsPerspective").then(a => isPerspective = a),
            localTable.getArray("double:VerticalExtent").then(a => verticalExtent = a),
            localTable.getArray("double:HorizontalExtent").then(a => horizontalExtent = a),
            localTable.getArray("double:FarDistance").then(a => farDistance = a),
            localTable.getArray("double:NearDistance").then(a => nearDistance = a),
            localTable.getArray("double:TargetDistance").then(a => targetDistance = a),
            localTable.getArray("double:RightOffset").then(a => rightOffset = a),
            localTable.getArray("double:UpOffset").then(a => upOffset = a),
        ])
        
        let camera: ICamera[] = []
        
        for (let i = 0; i <= id!.length; i++) {
            camera.push({
                index: i,
                id: id ? id[i] : undefined,
                isPerspective: isPerspective ? isPerspective[i] : undefined,
                verticalExtent: verticalExtent ? verticalExtent[i] : undefined,
                horizontalExtent: horizontalExtent ? horizontalExtent[i] : undefined,
                farDistance: farDistance ? farDistance[i] : undefined,
                nearDistance: nearDistance ? nearDistance[i] : undefined,
                targetDistance: targetDistance ? targetDistance[i] : undefined,
                rightOffset: rightOffset ? rightOffset[i] : undefined,
                upOffset: upOffset ? upOffset[i] : undefined
            })
        }
        
        return camera
    }
    
    async getId(cameraIndex: number): Promise<number | undefined>{
        return await this.entityTable.getNumber(cameraIndex, "int:Id")
    }
    
    async getAllId(): Promise<number[] | undefined>{
        return await this.entityTable.getArray("int:Id")
    }
    
    async getIsPerspective(cameraIndex: number): Promise<number | undefined>{
        return await this.entityTable.getNumber(cameraIndex, "int:IsPerspective")
    }
    
    async getAllIsPerspective(): Promise<number[] | undefined>{
        return await this.entityTable.getArray("int:IsPerspective")
    }
    
    async getVerticalExtent(cameraIndex: number): Promise<number | undefined>{
        return await this.entityTable.getNumber(cameraIndex, "double:VerticalExtent")
    }
    
    async getAllVerticalExtent(): Promise<number[] | undefined>{
        return await this.entityTable.getArray("double:VerticalExtent")
    }
    
    async getHorizontalExtent(cameraIndex: number): Promise<number | undefined>{
        return await this.entityTable.getNumber(cameraIndex, "double:HorizontalExtent")
    }
    
    async getAllHorizontalExtent(): Promise<number[] | undefined>{
        return await this.entityTable.getArray("double:HorizontalExtent")
    }
    
    async getFarDistance(cameraIndex: number): Promise<number | undefined>{
        return await this.entityTable.getNumber(cameraIndex, "double:FarDistance")
    }
    
    async getAllFarDistance(): Promise<number[] | undefined>{
        return await this.entityTable.getArray("double:FarDistance")
    }
    
    async getNearDistance(cameraIndex: number): Promise<number | undefined>{
        return await this.entityTable.getNumber(cameraIndex, "double:NearDistance")
    }
    
    async getAllNearDistance(): Promise<number[] | undefined>{
        return await this.entityTable.getArray("double:NearDistance")
    }
    
    async getTargetDistance(cameraIndex: number): Promise<number | undefined>{
        return await this.entityTable.getNumber(cameraIndex, "double:TargetDistance")
    }
    
    async getAllTargetDistance(): Promise<number[] | undefined>{
        return await this.entityTable.getArray("double:TargetDistance")
    }
    
    async getRightOffset(cameraIndex: number): Promise<number | undefined>{
        return await this.entityTable.getNumber(cameraIndex, "double:RightOffset")
    }
    
    async getAllRightOffset(): Promise<number[] | undefined>{
        return await this.entityTable.getArray("double:RightOffset")
    }
    
    async getUpOffset(cameraIndex: number): Promise<number | undefined>{
        return await this.entityTable.getNumber(cameraIndex, "double:UpOffset")
    }
    
    async getAllUpOffset(): Promise<number[] | undefined>{
        return await this.entityTable.getArray("double:UpOffset")
    }
    
}

export interface IMaterial {
    index: number
    name?: string
    materialCategory?: string
    color?: Vector3
    colorUvScaling?: Vector2
    colorUvOffset?: Vector2
    normalUvScaling?: Vector2
    normalUvOffset?: Vector2
    normalAmount?: number
    glossiness?: number
    smoothness?: number
    transparency?: number
    
    colorTextureFileIndex?: number
    colorTextureFile?: IAsset
    normalTextureFileIndex?: number
    normalTextureFile?: IAsset
    elementIndex?: number
    element?: IElement
}

export interface IMaterialTable {
    getCount(): Promise<number>
    get(materialIndex: number, recursive?: boolean): Promise<IMaterial>
    getAll(): Promise<IMaterial[]>
    
    getName(materialIndex: number): Promise<string | undefined>
    getAllName(): Promise<string[] | undefined>
    getMaterialCategory(materialIndex: number): Promise<string | undefined>
    getAllMaterialCategory(): Promise<string[] | undefined>
    getColor(materialIndex: number): Promise<Vector3 | undefined>
    getAllColor(): Promise<Vector3[] | undefined>
    getColorUvScaling(materialIndex: number): Promise<Vector2 | undefined>
    getAllColorUvScaling(): Promise<Vector2[] | undefined>
    getColorUvOffset(materialIndex: number): Promise<Vector2 | undefined>
    getAllColorUvOffset(): Promise<Vector2[] | undefined>
    getNormalUvScaling(materialIndex: number): Promise<Vector2 | undefined>
    getAllNormalUvScaling(): Promise<Vector2[] | undefined>
    getNormalUvOffset(materialIndex: number): Promise<Vector2 | undefined>
    getAllNormalUvOffset(): Promise<Vector2[] | undefined>
    getNormalAmount(materialIndex: number): Promise<number | undefined>
    getAllNormalAmount(): Promise<number[] | undefined>
    getGlossiness(materialIndex: number): Promise<number | undefined>
    getAllGlossiness(): Promise<number[] | undefined>
    getSmoothness(materialIndex: number): Promise<number | undefined>
    getAllSmoothness(): Promise<number[] | undefined>
    getTransparency(materialIndex: number): Promise<number | undefined>
    getAllTransparency(): Promise<number[] | undefined>
    
    getColorTextureFileIndex(materialIndex: number): Promise<number | undefined>
    getAllColorTextureFileIndex(): Promise<number[] | undefined>
    getColorTextureFile(materialIndex: number, recursive?: boolean): Promise<IAsset | undefined>
    getNormalTextureFileIndex(materialIndex: number): Promise<number | undefined>
    getAllNormalTextureFileIndex(): Promise<number[] | undefined>
    getNormalTextureFile(materialIndex: number, recursive?: boolean): Promise<IAsset | undefined>
    getElementIndex(materialIndex: number): Promise<number | undefined>
    getAllElementIndex(): Promise<number[] | undefined>
    getElement(materialIndex: number, recursive?: boolean): Promise<IElement | undefined>
}

export class Material implements IMaterial {
    index: number
    name?: string
    materialCategory?: string
    color?: Vector3
    colorUvScaling?: Vector2
    colorUvOffset?: Vector2
    normalUvScaling?: Vector2
    normalUvOffset?: Vector2
    normalAmount?: number
    glossiness?: number
    smoothness?: number
    transparency?: number
    
    colorTextureFileIndex?: number
    colorTextureFile?: IAsset
    normalTextureFileIndex?: number
    normalTextureFile?: IAsset
    elementIndex?: number
    element?: IElement
    
    static async createFromTable(table: IMaterialTable, index: number, recursive: boolean = false): Promise<IMaterial> {
        let result = new Material()
        result.index = index
        
        await Promise.all([
            table.getName(index).then(v => result.name = v),
            table.getMaterialCategory(index).then(v => result.materialCategory = v),
            table.getColor(index).then(v => result.color = v),
            table.getColorUvScaling(index).then(v => result.colorUvScaling = v),
            table.getColorUvOffset(index).then(v => result.colorUvOffset = v),
            table.getNormalUvScaling(index).then(v => result.normalUvScaling = v),
            table.getNormalUvOffset(index).then(v => result.normalUvOffset = v),
            table.getNormalAmount(index).then(v => result.normalAmount = v),
            table.getGlossiness(index).then(v => result.glossiness = v),
            table.getSmoothness(index).then(v => result.smoothness = v),
            table.getTransparency(index).then(v => result.transparency = v),
            table.getColorTextureFileIndex(index).then(v => result.colorTextureFileIndex = v),
            table.getNormalTextureFileIndex(index).then(v => result.normalTextureFileIndex = v),
            table.getElementIndex(index).then(v => result.elementIndex = v),
        ])
        
        if (recursive) {
            await Promise.all([
                table.getColorTextureFile(index).then(v => result.colorTextureFile = v),
                table.getNormalTextureFile(index).then(v => result.normalTextureFile = v),
                table.getElement(index).then(v => result.element = v),
            ])
        }
        
        return result
    }
}

export class MaterialTable implements IMaterialTable {
    private document: VimDocument
    private entityTable: EntityTable
    
    static async createFromDocument(document: VimDocument): Promise<IMaterialTable | undefined> {
        const entity = await document.entities.getBfast("Vim.Material")
        
        if (!entity) {
            return undefined
        }
        
        let table = new MaterialTable()
        table.document = document
        table.entityTable = new EntityTable(entity, document.strings)
        
        return table
    }
    
    async getCount(): Promise<number> {
        return (await this.entityTable.getArray("string:Name"))?.length ?? 0
    }
    
    async get(materialIndex: number, recursive?: boolean): Promise<IMaterial> {
        return await Material.createFromTable(this, materialIndex, recursive)
    }
    
    async getAll(): Promise<IMaterial[]> {
        const localTable = await this.entityTable.getLocal()
        
        let name: string[] | undefined
        let materialCategory: string[] | undefined
        const colorConverter = new Converters.Vector3Converter()
        let color: Vector3[] | undefined
        const colorUvScalingConverter = new Converters.Vector2Converter()
        let colorUvScaling: Vector2[] | undefined
        const colorUvOffsetConverter = new Converters.Vector2Converter()
        let colorUvOffset: Vector2[] | undefined
        const normalUvScalingConverter = new Converters.Vector2Converter()
        let normalUvScaling: Vector2[] | undefined
        const normalUvOffsetConverter = new Converters.Vector2Converter()
        let normalUvOffset: Vector2[] | undefined
        let normalAmount: number[] | undefined
        let glossiness: number[] | undefined
        let smoothness: number[] | undefined
        let transparency: number[] | undefined
        let colorTextureFileIndex: number[] | undefined
        let normalTextureFileIndex: number[] | undefined
        let elementIndex: number[] | undefined
        
        await Promise.all([
            localTable.getStringArray("string:Name").then(a => name = a),
            localTable.getStringArray("string:MaterialCategory").then(a => materialCategory = a),
            Promise.all(colorConverter.columns.map(c => this.entityTable.getArray("double:Color" + c)))
                .then(a => color = Converters.convertArray(colorConverter, a)),
            Promise.all(colorUvScalingConverter.columns.map(c => this.entityTable.getArray("double:ColorUvScaling" + c)))
                .then(a => colorUvScaling = Converters.convertArray(colorUvScalingConverter, a)),
            Promise.all(colorUvOffsetConverter.columns.map(c => this.entityTable.getArray("double:ColorUvOffset" + c)))
                .then(a => colorUvOffset = Converters.convertArray(colorUvOffsetConverter, a)),
            Promise.all(normalUvScalingConverter.columns.map(c => this.entityTable.getArray("double:NormalUvScaling" + c)))
                .then(a => normalUvScaling = Converters.convertArray(normalUvScalingConverter, a)),
            Promise.all(normalUvOffsetConverter.columns.map(c => this.entityTable.getArray("double:NormalUvOffset" + c)))
                .then(a => normalUvOffset = Converters.convertArray(normalUvOffsetConverter, a)),
            localTable.getArray("double:NormalAmount").then(a => normalAmount = a),
            localTable.getArray("double:Glossiness").then(a => glossiness = a),
            localTable.getArray("double:Smoothness").then(a => smoothness = a),
            localTable.getArray("double:Transparency").then(a => transparency = a),
            localTable.getArray("index:Vim.Asset:ColorTextureFile").then(a => colorTextureFileIndex = a),
            localTable.getArray("index:Vim.Asset:NormalTextureFile").then(a => normalTextureFileIndex = a),
            localTable.getArray("index:Vim.Element:Element").then(a => elementIndex = a),
        ])
        
        let material: IMaterial[] = []
        
        for (let i = 0; i <= name!.length; i++) {
            material.push({
                index: i,
                name: name ? name[i] : undefined,
                materialCategory: materialCategory ? materialCategory[i] : undefined,
                color: color ? color[i] : undefined,
                colorUvScaling: colorUvScaling ? colorUvScaling[i] : undefined,
                colorUvOffset: colorUvOffset ? colorUvOffset[i] : undefined,
                normalUvScaling: normalUvScaling ? normalUvScaling[i] : undefined,
                normalUvOffset: normalUvOffset ? normalUvOffset[i] : undefined,
                normalAmount: normalAmount ? normalAmount[i] : undefined,
                glossiness: glossiness ? glossiness[i] : undefined,
                smoothness: smoothness ? smoothness[i] : undefined,
                transparency: transparency ? transparency[i] : undefined,
                colorTextureFileIndex: colorTextureFileIndex ? colorTextureFileIndex[i] : undefined,
                normalTextureFileIndex: normalTextureFileIndex ? normalTextureFileIndex[i] : undefined,
                elementIndex: elementIndex ? elementIndex[i] : undefined
            })
        }
        
        return material
    }
    
    async getName(materialIndex: number): Promise<string | undefined>{
        return await this.entityTable.getString(materialIndex, "string:Name")
    }
    
    async getAllName(): Promise<string[] | undefined>{
        return await this.entityTable.getStringArray("string:Name")
    }
    
    async getMaterialCategory(materialIndex: number): Promise<string | undefined>{
        return await this.entityTable.getString(materialIndex, "string:MaterialCategory")
    }
    
    async getAllMaterialCategory(): Promise<string[] | undefined>{
        return await this.entityTable.getStringArray("string:MaterialCategory")
    }
    
    async getColor(materialIndex: number): Promise<Vector3 | undefined>{
        const converter = new Converters.Vector3Converter()
        
        let numbers = await Promise.all(converter.columns.map(c => this.entityTable.getNumber(materialIndex, "double:Color" + c)))
        
        return Converters.convert(converter, numbers)
    }
    
    async getAllColor(): Promise<Vector3[] | undefined>{
        const converter = new Converters.Vector3Converter()
        
        let numbers = await Promise.all(converter.columns.map(c => this.entityTable.getArray("double:Color" + c)))
        
        return Converters.convertArray(converter, numbers)
    }
    
    async getColorUvScaling(materialIndex: number): Promise<Vector2 | undefined>{
        const converter = new Converters.Vector2Converter()
        
        let numbers = await Promise.all(converter.columns.map(c => this.entityTable.getNumber(materialIndex, "double:ColorUvScaling" + c)))
        
        return Converters.convert(converter, numbers)
    }
    
    async getAllColorUvScaling(): Promise<Vector2[] | undefined>{
        const converter = new Converters.Vector2Converter()
        
        let numbers = await Promise.all(converter.columns.map(c => this.entityTable.getArray("double:ColorUvScaling" + c)))
        
        return Converters.convertArray(converter, numbers)
    }
    
    async getColorUvOffset(materialIndex: number): Promise<Vector2 | undefined>{
        const converter = new Converters.Vector2Converter()
        
        let numbers = await Promise.all(converter.columns.map(c => this.entityTable.getNumber(materialIndex, "double:ColorUvOffset" + c)))
        
        return Converters.convert(converter, numbers)
    }
    
    async getAllColorUvOffset(): Promise<Vector2[] | undefined>{
        const converter = new Converters.Vector2Converter()
        
        let numbers = await Promise.all(converter.columns.map(c => this.entityTable.getArray("double:ColorUvOffset" + c)))
        
        return Converters.convertArray(converter, numbers)
    }
    
    async getNormalUvScaling(materialIndex: number): Promise<Vector2 | undefined>{
        const converter = new Converters.Vector2Converter()
        
        let numbers = await Promise.all(converter.columns.map(c => this.entityTable.getNumber(materialIndex, "double:NormalUvScaling" + c)))
        
        return Converters.convert(converter, numbers)
    }
    
    async getAllNormalUvScaling(): Promise<Vector2[] | undefined>{
        const converter = new Converters.Vector2Converter()
        
        let numbers = await Promise.all(converter.columns.map(c => this.entityTable.getArray("double:NormalUvScaling" + c)))
        
        return Converters.convertArray(converter, numbers)
    }
    
    async getNormalUvOffset(materialIndex: number): Promise<Vector2 | undefined>{
        const converter = new Converters.Vector2Converter()
        
        let numbers = await Promise.all(converter.columns.map(c => this.entityTable.getNumber(materialIndex, "double:NormalUvOffset" + c)))
        
        return Converters.convert(converter, numbers)
    }
    
    async getAllNormalUvOffset(): Promise<Vector2[] | undefined>{
        const converter = new Converters.Vector2Converter()
        
        let numbers = await Promise.all(converter.columns.map(c => this.entityTable.getArray("double:NormalUvOffset" + c)))
        
        return Converters.convertArray(converter, numbers)
    }
    
    async getNormalAmount(materialIndex: number): Promise<number | undefined>{
        return await this.entityTable.getNumber(materialIndex, "double:NormalAmount")
    }
    
    async getAllNormalAmount(): Promise<number[] | undefined>{
        return await this.entityTable.getArray("double:NormalAmount")
    }
    
    async getGlossiness(materialIndex: number): Promise<number | undefined>{
        return await this.entityTable.getNumber(materialIndex, "double:Glossiness")
    }
    
    async getAllGlossiness(): Promise<number[] | undefined>{
        return await this.entityTable.getArray("double:Glossiness")
    }
    
    async getSmoothness(materialIndex: number): Promise<number | undefined>{
        return await this.entityTable.getNumber(materialIndex, "double:Smoothness")
    }
    
    async getAllSmoothness(): Promise<number[] | undefined>{
        return await this.entityTable.getArray("double:Smoothness")
    }
    
    async getTransparency(materialIndex: number): Promise<number | undefined>{
        return await this.entityTable.getNumber(materialIndex, "double:Transparency")
    }
    
    async getAllTransparency(): Promise<number[] | undefined>{
        return await this.entityTable.getArray("double:Transparency")
    }
    
    async getColorTextureFileIndex(materialIndex: number): Promise<number | undefined> {
        return await this.entityTable.getNumber(materialIndex, "index:Vim.Asset:ColorTextureFile")
    }
    
    async getAllColorTextureFileIndex(): Promise<number[] | undefined> {
        return await this.entityTable.getArray("index:Vim.Asset:ColorTextureFile")
    }
    
    async getColorTextureFile(materialIndex: number, recursive?: boolean): Promise<IAsset | undefined> {
        const index = await this.getColorTextureFileIndex(materialIndex)
        
        if (index === undefined) {
            return undefined
        }
        
        return await this.document.asset?.get(index, recursive)
    }
    
    async getNormalTextureFileIndex(materialIndex: number): Promise<number | undefined> {
        return await this.entityTable.getNumber(materialIndex, "index:Vim.Asset:NormalTextureFile")
    }
    
    async getAllNormalTextureFileIndex(): Promise<number[] | undefined> {
        return await this.entityTable.getArray("index:Vim.Asset:NormalTextureFile")
    }
    
    async getNormalTextureFile(materialIndex: number, recursive?: boolean): Promise<IAsset | undefined> {
        const index = await this.getNormalTextureFileIndex(materialIndex)
        
        if (index === undefined) {
            return undefined
        }
        
        return await this.document.asset?.get(index, recursive)
    }
    
    async getElementIndex(materialIndex: number): Promise<number | undefined> {
        return await this.entityTable.getNumber(materialIndex, "index:Vim.Element:Element")
    }
    
    async getAllElementIndex(): Promise<number[] | undefined> {
        return await this.entityTable.getArray("index:Vim.Element:Element")
    }
    
    async getElement(materialIndex: number, recursive?: boolean): Promise<IElement | undefined> {
        const index = await this.getElementIndex(materialIndex)
        
        if (index === undefined) {
            return undefined
        }
        
        return await this.document.element?.get(index, recursive)
    }
    
}

export interface IMaterialInElement {
    index: number
    area?: number
    volume?: number
    isPaint?: boolean
    
    materialIndex?: number
    material?: IMaterial
    elementIndex?: number
    element?: IElement
}

export interface IMaterialInElementTable {
    getCount(): Promise<number>
    get(materialInElementIndex: number, recursive?: boolean): Promise<IMaterialInElement>
    getAll(): Promise<IMaterialInElement[]>
    
    getArea(materialInElementIndex: number): Promise<number | undefined>
    getAllArea(): Promise<number[] | undefined>
    getVolume(materialInElementIndex: number): Promise<number | undefined>
    getAllVolume(): Promise<number[] | undefined>
    getIsPaint(materialInElementIndex: number): Promise<boolean | undefined>
    getAllIsPaint(): Promise<boolean[] | undefined>
    
    getMaterialIndex(materialInElementIndex: number): Promise<number | undefined>
    getAllMaterialIndex(): Promise<number[] | undefined>
    getMaterial(materialInElementIndex: number, recursive?: boolean): Promise<IMaterial | undefined>
    getElementIndex(materialInElementIndex: number): Promise<number | undefined>
    getAllElementIndex(): Promise<number[] | undefined>
    getElement(materialInElementIndex: number, recursive?: boolean): Promise<IElement | undefined>
}

export class MaterialInElement implements IMaterialInElement {
    index: number
    area?: number
    volume?: number
    isPaint?: boolean
    
    materialIndex?: number
    material?: IMaterial
    elementIndex?: number
    element?: IElement
    
    static async createFromTable(table: IMaterialInElementTable, index: number, recursive: boolean = false): Promise<IMaterialInElement> {
        let result = new MaterialInElement()
        result.index = index
        
        await Promise.all([
            table.getArea(index).then(v => result.area = v),
            table.getVolume(index).then(v => result.volume = v),
            table.getIsPaint(index).then(v => result.isPaint = v),
            table.getMaterialIndex(index).then(v => result.materialIndex = v),
            table.getElementIndex(index).then(v => result.elementIndex = v),
        ])
        
        if (recursive) {
            await Promise.all([
                table.getMaterial(index).then(v => result.material = v),
                table.getElement(index).then(v => result.element = v),
            ])
        }
        
        return result
    }
}

export class MaterialInElementTable implements IMaterialInElementTable {
    private document: VimDocument
    private entityTable: EntityTable
    
    static async createFromDocument(document: VimDocument): Promise<IMaterialInElementTable | undefined> {
        const entity = await document.entities.getBfast("Vim.MaterialInElement")
        
        if (!entity) {
            return undefined
        }
        
        let table = new MaterialInElementTable()
        table.document = document
        table.entityTable = new EntityTable(entity, document.strings)
        
        return table
    }
    
    async getCount(): Promise<number> {
        return (await this.entityTable.getArray("double:Area"))?.length ?? 0
    }
    
    async get(materialInElementIndex: number, recursive?: boolean): Promise<IMaterialInElement> {
        return await MaterialInElement.createFromTable(this, materialInElementIndex, recursive)
    }
    
    async getAll(): Promise<IMaterialInElement[]> {
        const localTable = await this.entityTable.getLocal()
        
        let area: number[] | undefined
        let volume: number[] | undefined
        let isPaint: boolean[] | undefined
        let materialIndex: number[] | undefined
        let elementIndex: number[] | undefined
        
        await Promise.all([
            localTable.getArray("double:Area").then(a => area = a),
            localTable.getArray("double:Volume").then(a => volume = a),
            localTable.getBooleanArray("byte:IsPaint").then(a => isPaint = a),
            localTable.getArray("index:Vim.Material:Material").then(a => materialIndex = a),
            localTable.getArray("index:Vim.Element:Element").then(a => elementIndex = a),
        ])
        
        let materialInElement: IMaterialInElement[] = []
        
        for (let i = 0; i <= area!.length; i++) {
            materialInElement.push({
                index: i,
                area: area ? area[i] : undefined,
                volume: volume ? volume[i] : undefined,
                isPaint: isPaint ? isPaint[i] : undefined,
                materialIndex: materialIndex ? materialIndex[i] : undefined,
                elementIndex: elementIndex ? elementIndex[i] : undefined
            })
        }
        
        return materialInElement
    }
    
    async getArea(materialInElementIndex: number): Promise<number | undefined>{
        return await this.entityTable.getNumber(materialInElementIndex, "double:Area")
    }
    
    async getAllArea(): Promise<number[] | undefined>{
        return await this.entityTable.getArray("double:Area")
    }
    
    async getVolume(materialInElementIndex: number): Promise<number | undefined>{
        return await this.entityTable.getNumber(materialInElementIndex, "double:Volume")
    }
    
    async getAllVolume(): Promise<number[] | undefined>{
        return await this.entityTable.getArray("double:Volume")
    }
    
    async getIsPaint(materialInElementIndex: number): Promise<boolean | undefined>{
        return await this.entityTable.getBoolean(materialInElementIndex, "byte:IsPaint")
    }
    
    async getAllIsPaint(): Promise<boolean[] | undefined>{
        return await this.entityTable.getBooleanArray("byte:IsPaint")
    }
    
    async getMaterialIndex(materialInElementIndex: number): Promise<number | undefined> {
        return await this.entityTable.getNumber(materialInElementIndex, "index:Vim.Material:Material")
    }
    
    async getAllMaterialIndex(): Promise<number[] | undefined> {
        return await this.entityTable.getArray("index:Vim.Material:Material")
    }
    
    async getMaterial(materialInElementIndex: number, recursive?: boolean): Promise<IMaterial | undefined> {
        const index = await this.getMaterialIndex(materialInElementIndex)
        
        if (index === undefined) {
            return undefined
        }
        
        return await this.document.material?.get(index, recursive)
    }
    
    async getElementIndex(materialInElementIndex: number): Promise<number | undefined> {
        return await this.entityTable.getNumber(materialInElementIndex, "index:Vim.Element:Element")
    }
    
    async getAllElementIndex(): Promise<number[] | undefined> {
        return await this.entityTable.getArray("index:Vim.Element:Element")
    }
    
    async getElement(materialInElementIndex: number, recursive?: boolean): Promise<IElement | undefined> {
        const index = await this.getElementIndex(materialInElementIndex)
        
        if (index === undefined) {
            return undefined
        }
        
        return await this.document.element?.get(index, recursive)
    }
    
}

export interface ICompoundStructureLayer {
    index: number
    orderIndex?: number
    width?: number
    materialFunctionAssignment?: string
    
    materialIndex?: number
    material?: IMaterial
    compoundStructureIndex?: number
    compoundStructure?: ICompoundStructure
}

export interface ICompoundStructureLayerTable {
    getCount(): Promise<number>
    get(compoundStructureLayerIndex: number, recursive?: boolean): Promise<ICompoundStructureLayer>
    getAll(): Promise<ICompoundStructureLayer[]>
    
    getOrderIndex(compoundStructureLayerIndex: number): Promise<number | undefined>
    getAllOrderIndex(): Promise<number[] | undefined>
    getWidth(compoundStructureLayerIndex: number): Promise<number | undefined>
    getAllWidth(): Promise<number[] | undefined>
    getMaterialFunctionAssignment(compoundStructureLayerIndex: number): Promise<string | undefined>
    getAllMaterialFunctionAssignment(): Promise<string[] | undefined>
    
    getMaterialIndex(compoundStructureLayerIndex: number): Promise<number | undefined>
    getAllMaterialIndex(): Promise<number[] | undefined>
    getMaterial(compoundStructureLayerIndex: number, recursive?: boolean): Promise<IMaterial | undefined>
    getCompoundStructureIndex(compoundStructureLayerIndex: number): Promise<number | undefined>
    getAllCompoundStructureIndex(): Promise<number[] | undefined>
    getCompoundStructure(compoundStructureLayerIndex: number, recursive?: boolean): Promise<ICompoundStructure | undefined>
}

export class CompoundStructureLayer implements ICompoundStructureLayer {
    index: number
    orderIndex?: number
    width?: number
    materialFunctionAssignment?: string
    
    materialIndex?: number
    material?: IMaterial
    compoundStructureIndex?: number
    compoundStructure?: ICompoundStructure
    
    static async createFromTable(table: ICompoundStructureLayerTable, index: number, recursive: boolean = false): Promise<ICompoundStructureLayer> {
        let result = new CompoundStructureLayer()
        result.index = index
        
        await Promise.all([
            table.getOrderIndex(index).then(v => result.orderIndex = v),
            table.getWidth(index).then(v => result.width = v),
            table.getMaterialFunctionAssignment(index).then(v => result.materialFunctionAssignment = v),
            table.getMaterialIndex(index).then(v => result.materialIndex = v),
            table.getCompoundStructureIndex(index).then(v => result.compoundStructureIndex = v),
        ])
        
        if (recursive) {
            await Promise.all([
                table.getMaterial(index).then(v => result.material = v),
                table.getCompoundStructure(index).then(v => result.compoundStructure = v),
            ])
        }
        
        return result
    }
}

export class CompoundStructureLayerTable implements ICompoundStructureLayerTable {
    private document: VimDocument
    private entityTable: EntityTable
    
    static async createFromDocument(document: VimDocument): Promise<ICompoundStructureLayerTable | undefined> {
        const entity = await document.entities.getBfast("Vim.CompoundStructureLayer")
        
        if (!entity) {
            return undefined
        }
        
        let table = new CompoundStructureLayerTable()
        table.document = document
        table.entityTable = new EntityTable(entity, document.strings)
        
        return table
    }
    
    async getCount(): Promise<number> {
        return (await this.entityTable.getArray("int:OrderIndex"))?.length ?? 0
    }
    
    async get(compoundStructureLayerIndex: number, recursive?: boolean): Promise<ICompoundStructureLayer> {
        return await CompoundStructureLayer.createFromTable(this, compoundStructureLayerIndex, recursive)
    }
    
    async getAll(): Promise<ICompoundStructureLayer[]> {
        const localTable = await this.entityTable.getLocal()
        
        let orderIndex: number[] | undefined
        let width: number[] | undefined
        let materialFunctionAssignment: string[] | undefined
        let materialIndex: number[] | undefined
        let compoundStructureIndex: number[] | undefined
        
        await Promise.all([
            localTable.getArray("int:OrderIndex").then(a => orderIndex = a),
            localTable.getArray("double:Width").then(a => width = a),
            localTable.getStringArray("string:MaterialFunctionAssignment").then(a => materialFunctionAssignment = a),
            localTable.getArray("index:Vim.Material:Material").then(a => materialIndex = a),
            localTable.getArray("index:Vim.CompoundStructure:CompoundStructure").then(a => compoundStructureIndex = a),
        ])
        
        let compoundStructureLayer: ICompoundStructureLayer[] = []
        
        for (let i = 0; i <= orderIndex!.length; i++) {
            compoundStructureLayer.push({
                index: i,
                orderIndex: orderIndex ? orderIndex[i] : undefined,
                width: width ? width[i] : undefined,
                materialFunctionAssignment: materialFunctionAssignment ? materialFunctionAssignment[i] : undefined,
                materialIndex: materialIndex ? materialIndex[i] : undefined,
                compoundStructureIndex: compoundStructureIndex ? compoundStructureIndex[i] : undefined
            })
        }
        
        return compoundStructureLayer
    }
    
    async getOrderIndex(compoundStructureLayerIndex: number): Promise<number | undefined>{
        return await this.entityTable.getNumber(compoundStructureLayerIndex, "int:OrderIndex")
    }
    
    async getAllOrderIndex(): Promise<number[] | undefined>{
        return await this.entityTable.getArray("int:OrderIndex")
    }
    
    async getWidth(compoundStructureLayerIndex: number): Promise<number | undefined>{
        return await this.entityTable.getNumber(compoundStructureLayerIndex, "double:Width")
    }
    
    async getAllWidth(): Promise<number[] | undefined>{
        return await this.entityTable.getArray("double:Width")
    }
    
    async getMaterialFunctionAssignment(compoundStructureLayerIndex: number): Promise<string | undefined>{
        return await this.entityTable.getString(compoundStructureLayerIndex, "string:MaterialFunctionAssignment")
    }
    
    async getAllMaterialFunctionAssignment(): Promise<string[] | undefined>{
        return await this.entityTable.getStringArray("string:MaterialFunctionAssignment")
    }
    
    async getMaterialIndex(compoundStructureLayerIndex: number): Promise<number | undefined> {
        return await this.entityTable.getNumber(compoundStructureLayerIndex, "index:Vim.Material:Material")
    }
    
    async getAllMaterialIndex(): Promise<number[] | undefined> {
        return await this.entityTable.getArray("index:Vim.Material:Material")
    }
    
    async getMaterial(compoundStructureLayerIndex: number, recursive?: boolean): Promise<IMaterial | undefined> {
        const index = await this.getMaterialIndex(compoundStructureLayerIndex)
        
        if (index === undefined) {
            return undefined
        }
        
        return await this.document.material?.get(index, recursive)
    }
    
    async getCompoundStructureIndex(compoundStructureLayerIndex: number): Promise<number | undefined> {
        return await this.entityTable.getNumber(compoundStructureLayerIndex, "index:Vim.CompoundStructure:CompoundStructure")
    }
    
    async getAllCompoundStructureIndex(): Promise<number[] | undefined> {
        return await this.entityTable.getArray("index:Vim.CompoundStructure:CompoundStructure")
    }
    
    async getCompoundStructure(compoundStructureLayerIndex: number, recursive?: boolean): Promise<ICompoundStructure | undefined> {
        const index = await this.getCompoundStructureIndex(compoundStructureLayerIndex)
        
        if (index === undefined) {
            return undefined
        }
        
        return await this.document.compoundStructure?.get(index, recursive)
    }
    
}

export interface ICompoundStructure {
    index: number
    width?: number
    
    structuralLayerIndex?: number
    structuralLayer?: ICompoundStructureLayer
}

export interface ICompoundStructureTable {
    getCount(): Promise<number>
    get(compoundStructureIndex: number, recursive?: boolean): Promise<ICompoundStructure>
    getAll(): Promise<ICompoundStructure[]>
    
    getWidth(compoundStructureIndex: number): Promise<number | undefined>
    getAllWidth(): Promise<number[] | undefined>
    
    getStructuralLayerIndex(compoundStructureIndex: number): Promise<number | undefined>
    getAllStructuralLayerIndex(): Promise<number[] | undefined>
    getStructuralLayer(compoundStructureIndex: number, recursive?: boolean): Promise<ICompoundStructureLayer | undefined>
}

export class CompoundStructure implements ICompoundStructure {
    index: number
    width?: number
    
    structuralLayerIndex?: number
    structuralLayer?: ICompoundStructureLayer
    
    static async createFromTable(table: ICompoundStructureTable, index: number, recursive: boolean = false): Promise<ICompoundStructure> {
        let result = new CompoundStructure()
        result.index = index
        
        await Promise.all([
            table.getWidth(index).then(v => result.width = v),
            table.getStructuralLayerIndex(index).then(v => result.structuralLayerIndex = v),
        ])
        
        if (recursive) {
            await Promise.all([
                table.getStructuralLayer(index).then(v => result.structuralLayer = v),
            ])
        }
        
        return result
    }
}

export class CompoundStructureTable implements ICompoundStructureTable {
    private document: VimDocument
    private entityTable: EntityTable
    
    static async createFromDocument(document: VimDocument): Promise<ICompoundStructureTable | undefined> {
        const entity = await document.entities.getBfast("Vim.CompoundStructure")
        
        if (!entity) {
            return undefined
        }
        
        let table = new CompoundStructureTable()
        table.document = document
        table.entityTable = new EntityTable(entity, document.strings)
        
        return table
    }
    
    async getCount(): Promise<number> {
        return (await this.entityTable.getArray("double:Width"))?.length ?? 0
    }
    
    async get(compoundStructureIndex: number, recursive?: boolean): Promise<ICompoundStructure> {
        return await CompoundStructure.createFromTable(this, compoundStructureIndex, recursive)
    }
    
    async getAll(): Promise<ICompoundStructure[]> {
        const localTable = await this.entityTable.getLocal()
        
        let width: number[] | undefined
        let structuralLayerIndex: number[] | undefined
        
        await Promise.all([
            localTable.getArray("double:Width").then(a => width = a),
            localTable.getArray("index:Vim.CompoundStructureLayer:StructuralLayer").then(a => structuralLayerIndex = a),
        ])
        
        let compoundStructure: ICompoundStructure[] = []
        
        for (let i = 0; i <= width!.length; i++) {
            compoundStructure.push({
                index: i,
                width: width ? width[i] : undefined,
                structuralLayerIndex: structuralLayerIndex ? structuralLayerIndex[i] : undefined
            })
        }
        
        return compoundStructure
    }
    
    async getWidth(compoundStructureIndex: number): Promise<number | undefined>{
        return await this.entityTable.getNumber(compoundStructureIndex, "double:Width")
    }
    
    async getAllWidth(): Promise<number[] | undefined>{
        return await this.entityTable.getArray("double:Width")
    }
    
    async getStructuralLayerIndex(compoundStructureIndex: number): Promise<number | undefined> {
        return await this.entityTable.getNumber(compoundStructureIndex, "index:Vim.CompoundStructureLayer:StructuralLayer")
    }
    
    async getAllStructuralLayerIndex(): Promise<number[] | undefined> {
        return await this.entityTable.getArray("index:Vim.CompoundStructureLayer:StructuralLayer")
    }
    
    async getStructuralLayer(compoundStructureIndex: number, recursive?: boolean): Promise<ICompoundStructureLayer | undefined> {
        const index = await this.getStructuralLayerIndex(compoundStructureIndex)
        
        if (index === undefined) {
            return undefined
        }
        
        return await this.document.compoundStructureLayer?.get(index, recursive)
    }
    
}

export interface INode {
    index: number
    
    elementIndex?: number
    element?: IElement
}

export interface INodeTable {
    getCount(): Promise<number>
    get(nodeIndex: number, recursive?: boolean): Promise<INode>
    getAll(): Promise<INode[]>
    
    getElementIndex(nodeIndex: number): Promise<number | undefined>
    getAllElementIndex(): Promise<number[] | undefined>
    getElement(nodeIndex: number, recursive?: boolean): Promise<IElement | undefined>
}

export class Node implements INode {
    index: number
    
    elementIndex?: number
    element?: IElement
    
    static async createFromTable(table: INodeTable, index: number, recursive: boolean = false): Promise<INode> {
        let result = new Node()
        result.index = index
        
        await Promise.all([
            table.getElementIndex(index).then(v => result.elementIndex = v),
        ])
        
        if (recursive) {
            await Promise.all([
                table.getElement(index).then(v => result.element = v),
            ])
        }
        
        return result
    }
}

export class NodeTable implements INodeTable {
    private document: VimDocument
    private entityTable: EntityTable
    
    static async createFromDocument(document: VimDocument): Promise<INodeTable | undefined> {
        const entity = await document.entities.getBfast("Vim.Node")
        
        if (!entity) {
            return undefined
        }
        
        let table = new NodeTable()
        table.document = document
        table.entityTable = new EntityTable(entity, document.strings)
        
        return table
    }
    
    async getCount(): Promise<number> {
        return (await this.entityTable.getArray("index:Vim.Element:Element"))?.length ?? 0
    }
    
    async get(nodeIndex: number, recursive?: boolean): Promise<INode> {
        return await Node.createFromTable(this, nodeIndex, recursive)
    }
    
    async getAll(): Promise<INode[]> {
        const localTable = await this.entityTable.getLocal()
        
        let elementIndex: number[] | undefined
        
        await Promise.all([
            localTable.getArray("index:Vim.Element:Element").then(a => elementIndex = a),
        ])
        
        let node: INode[] = []
        
        for (let i = 0; i <= elementIndex!.length; i++) {
            node.push({
                index: i,
                elementIndex: elementIndex ? elementIndex[i] : undefined
            })
        }
        
        return node
    }
    
    async getElementIndex(nodeIndex: number): Promise<number | undefined> {
        return await this.entityTable.getNumber(nodeIndex, "index:Vim.Element:Element")
    }
    
    async getAllElementIndex(): Promise<number[] | undefined> {
        return await this.entityTable.getArray("index:Vim.Element:Element")
    }
    
    async getElement(nodeIndex: number, recursive?: boolean): Promise<IElement | undefined> {
        const index = await this.getElementIndex(nodeIndex)
        
        if (index === undefined) {
            return undefined
        }
        
        return await this.document.element?.get(index, recursive)
    }
    
}

export interface IGeometry {
    index: number
    box?: AABox
    vertexCount?: number
    faceCount?: number
}

export interface IGeometryTable {
    getCount(): Promise<number>
    get(geometryIndex: number, recursive?: boolean): Promise<IGeometry>
    getAll(): Promise<IGeometry[]>
    
    getBox(geometryIndex: number): Promise<AABox | undefined>
    getAllBox(): Promise<AABox[] | undefined>
    getVertexCount(geometryIndex: number): Promise<number | undefined>
    getAllVertexCount(): Promise<number[] | undefined>
    getFaceCount(geometryIndex: number): Promise<number | undefined>
    getAllFaceCount(): Promise<number[] | undefined>
}

export class Geometry implements IGeometry {
    index: number
    box?: AABox
    vertexCount?: number
    faceCount?: number
    
    static async createFromTable(table: IGeometryTable, index: number, recursive: boolean = false): Promise<IGeometry> {
        let result = new Geometry()
        result.index = index
        
        await Promise.all([
            table.getBox(index).then(v => result.box = v),
            table.getVertexCount(index).then(v => result.vertexCount = v),
            table.getFaceCount(index).then(v => result.faceCount = v),
        ])
        
        return result
    }
}

export class GeometryTable implements IGeometryTable {
    private entityTable: EntityTable
    
    static async createFromDocument(document: VimDocument): Promise<IGeometryTable | undefined> {
        const entity = await document.entities.getBfast("Vim.Geometry")
        
        if (!entity) {
            return undefined
        }
        
        let table = new GeometryTable()
        table.entityTable = new EntityTable(entity, document.strings)
        
        return table
    }
    
    async getCount(): Promise<number> {
        return (await this.entityTable.getArray("float:Box" + new Converters.AABoxConverter().columns[0]))?.length ?? 0
    }
    
    async get(geometryIndex: number, recursive?: boolean): Promise<IGeometry> {
        return await Geometry.createFromTable(this, geometryIndex, recursive)
    }
    
    async getAll(): Promise<IGeometry[]> {
        const localTable = await this.entityTable.getLocal()
        
        const boxConverter = new Converters.AABoxConverter()
        let box: AABox[] | undefined
        let vertexCount: number[] | undefined
        let faceCount: number[] | undefined
        
        await Promise.all([
            Promise.all(boxConverter.columns.map(c => this.entityTable.getArray("float:Box" + c)))
                .then(a => box = Converters.convertArray(boxConverter, a)),
            localTable.getArray("int:VertexCount").then(a => vertexCount = a),
            localTable.getArray("int:FaceCount").then(a => faceCount = a),
        ])
        
        let geometry: IGeometry[] = []
        
        for (let i = 0; i <= box!.length; i++) {
            geometry.push({
                index: i,
                box: box ? box[i] : undefined,
                vertexCount: vertexCount ? vertexCount[i] : undefined,
                faceCount: faceCount ? faceCount[i] : undefined
            })
        }
        
        return geometry
    }
    
    async getBox(geometryIndex: number): Promise<AABox | undefined>{
        const converter = new Converters.AABoxConverter()
        
        let numbers = await Promise.all(converter.columns.map(c => this.entityTable.getNumber(geometryIndex, "float:Box" + c)))
        
        return Converters.convert(converter, numbers)
    }
    
    async getAllBox(): Promise<AABox[] | undefined>{
        const converter = new Converters.AABoxConverter()
        
        let numbers = await Promise.all(converter.columns.map(c => this.entityTable.getArray("float:Box" + c)))
        
        return Converters.convertArray(converter, numbers)
    }
    
    async getVertexCount(geometryIndex: number): Promise<number | undefined>{
        return await this.entityTable.getNumber(geometryIndex, "int:VertexCount")
    }
    
    async getAllVertexCount(): Promise<number[] | undefined>{
        return await this.entityTable.getArray("int:VertexCount")
    }
    
    async getFaceCount(geometryIndex: number): Promise<number | undefined>{
        return await this.entityTable.getNumber(geometryIndex, "int:FaceCount")
    }
    
    async getAllFaceCount(): Promise<number[] | undefined>{
        return await this.entityTable.getArray("int:FaceCount")
    }
    
}

export interface IShape {
    index: number
    
    elementIndex?: number
    element?: IElement
}

export interface IShapeTable {
    getCount(): Promise<number>
    get(shapeIndex: number, recursive?: boolean): Promise<IShape>
    getAll(): Promise<IShape[]>
    
    getElementIndex(shapeIndex: number): Promise<number | undefined>
    getAllElementIndex(): Promise<number[] | undefined>
    getElement(shapeIndex: number, recursive?: boolean): Promise<IElement | undefined>
}

export class Shape implements IShape {
    index: number
    
    elementIndex?: number
    element?: IElement
    
    static async createFromTable(table: IShapeTable, index: number, recursive: boolean = false): Promise<IShape> {
        let result = new Shape()
        result.index = index
        
        await Promise.all([
            table.getElementIndex(index).then(v => result.elementIndex = v),
        ])
        
        if (recursive) {
            await Promise.all([
                table.getElement(index).then(v => result.element = v),
            ])
        }
        
        return result
    }
}

export class ShapeTable implements IShapeTable {
    private document: VimDocument
    private entityTable: EntityTable
    
    static async createFromDocument(document: VimDocument): Promise<IShapeTable | undefined> {
        const entity = await document.entities.getBfast("Vim.Shape")
        
        if (!entity) {
            return undefined
        }
        
        let table = new ShapeTable()
        table.document = document
        table.entityTable = new EntityTable(entity, document.strings)
        
        return table
    }
    
    async getCount(): Promise<number> {
        return (await this.entityTable.getArray("index:Vim.Element:Element"))?.length ?? 0
    }
    
    async get(shapeIndex: number, recursive?: boolean): Promise<IShape> {
        return await Shape.createFromTable(this, shapeIndex, recursive)
    }
    
    async getAll(): Promise<IShape[]> {
        const localTable = await this.entityTable.getLocal()
        
        let elementIndex: number[] | undefined
        
        await Promise.all([
            localTable.getArray("index:Vim.Element:Element").then(a => elementIndex = a),
        ])
        
        let shape: IShape[] = []
        
        for (let i = 0; i <= elementIndex!.length; i++) {
            shape.push({
                index: i,
                elementIndex: elementIndex ? elementIndex[i] : undefined
            })
        }
        
        return shape
    }
    
    async getElementIndex(shapeIndex: number): Promise<number | undefined> {
        return await this.entityTable.getNumber(shapeIndex, "index:Vim.Element:Element")
    }
    
    async getAllElementIndex(): Promise<number[] | undefined> {
        return await this.entityTable.getArray("index:Vim.Element:Element")
    }
    
    async getElement(shapeIndex: number, recursive?: boolean): Promise<IElement | undefined> {
        const index = await this.getElementIndex(shapeIndex)
        
        if (index === undefined) {
            return undefined
        }
        
        return await this.document.element?.get(index, recursive)
    }
    
}

export interface IShapeCollection {
    index: number
    
    elementIndex?: number
    element?: IElement
}

export interface IShapeCollectionTable {
    getCount(): Promise<number>
    get(shapeCollectionIndex: number, recursive?: boolean): Promise<IShapeCollection>
    getAll(): Promise<IShapeCollection[]>
    
    getElementIndex(shapeCollectionIndex: number): Promise<number | undefined>
    getAllElementIndex(): Promise<number[] | undefined>
    getElement(shapeCollectionIndex: number, recursive?: boolean): Promise<IElement | undefined>
}

export class ShapeCollection implements IShapeCollection {
    index: number
    
    elementIndex?: number
    element?: IElement
    
    static async createFromTable(table: IShapeCollectionTable, index: number, recursive: boolean = false): Promise<IShapeCollection> {
        let result = new ShapeCollection()
        result.index = index
        
        await Promise.all([
            table.getElementIndex(index).then(v => result.elementIndex = v),
        ])
        
        if (recursive) {
            await Promise.all([
                table.getElement(index).then(v => result.element = v),
            ])
        }
        
        return result
    }
}

export class ShapeCollectionTable implements IShapeCollectionTable {
    private document: VimDocument
    private entityTable: EntityTable
    
    static async createFromDocument(document: VimDocument): Promise<IShapeCollectionTable | undefined> {
        const entity = await document.entities.getBfast("Vim.ShapeCollection")
        
        if (!entity) {
            return undefined
        }
        
        let table = new ShapeCollectionTable()
        table.document = document
        table.entityTable = new EntityTable(entity, document.strings)
        
        return table
    }
    
    async getCount(): Promise<number> {
        return (await this.entityTable.getArray("index:Vim.Element:Element"))?.length ?? 0
    }
    
    async get(shapeCollectionIndex: number, recursive?: boolean): Promise<IShapeCollection> {
        return await ShapeCollection.createFromTable(this, shapeCollectionIndex, recursive)
    }
    
    async getAll(): Promise<IShapeCollection[]> {
        const localTable = await this.entityTable.getLocal()
        
        let elementIndex: number[] | undefined
        
        await Promise.all([
            localTable.getArray("index:Vim.Element:Element").then(a => elementIndex = a),
        ])
        
        let shapeCollection: IShapeCollection[] = []
        
        for (let i = 0; i <= elementIndex!.length; i++) {
            shapeCollection.push({
                index: i,
                elementIndex: elementIndex ? elementIndex[i] : undefined
            })
        }
        
        return shapeCollection
    }
    
    async getElementIndex(shapeCollectionIndex: number): Promise<number | undefined> {
        return await this.entityTable.getNumber(shapeCollectionIndex, "index:Vim.Element:Element")
    }
    
    async getAllElementIndex(): Promise<number[] | undefined> {
        return await this.entityTable.getArray("index:Vim.Element:Element")
    }
    
    async getElement(shapeCollectionIndex: number, recursive?: boolean): Promise<IElement | undefined> {
        const index = await this.getElementIndex(shapeCollectionIndex)
        
        if (index === undefined) {
            return undefined
        }
        
        return await this.document.element?.get(index, recursive)
    }
    
}

export interface IShapeInShapeCollection {
    index: number
    
    shapeIndex?: number
    shape?: IShape
    shapeCollectionIndex?: number
    shapeCollection?: IShapeCollection
}

export interface IShapeInShapeCollectionTable {
    getCount(): Promise<number>
    get(shapeInShapeCollectionIndex: number, recursive?: boolean): Promise<IShapeInShapeCollection>
    getAll(): Promise<IShapeInShapeCollection[]>
    
    getShapeIndex(shapeInShapeCollectionIndex: number): Promise<number | undefined>
    getAllShapeIndex(): Promise<number[] | undefined>
    getShape(shapeInShapeCollectionIndex: number, recursive?: boolean): Promise<IShape | undefined>
    getShapeCollectionIndex(shapeInShapeCollectionIndex: number): Promise<number | undefined>
    getAllShapeCollectionIndex(): Promise<number[] | undefined>
    getShapeCollection(shapeInShapeCollectionIndex: number, recursive?: boolean): Promise<IShapeCollection | undefined>
}

export class ShapeInShapeCollection implements IShapeInShapeCollection {
    index: number
    
    shapeIndex?: number
    shape?: IShape
    shapeCollectionIndex?: number
    shapeCollection?: IShapeCollection
    
    static async createFromTable(table: IShapeInShapeCollectionTable, index: number, recursive: boolean = false): Promise<IShapeInShapeCollection> {
        let result = new ShapeInShapeCollection()
        result.index = index
        
        await Promise.all([
            table.getShapeIndex(index).then(v => result.shapeIndex = v),
            table.getShapeCollectionIndex(index).then(v => result.shapeCollectionIndex = v),
        ])
        
        if (recursive) {
            await Promise.all([
                table.getShape(index).then(v => result.shape = v),
                table.getShapeCollection(index).then(v => result.shapeCollection = v),
            ])
        }
        
        return result
    }
}

export class ShapeInShapeCollectionTable implements IShapeInShapeCollectionTable {
    private document: VimDocument
    private entityTable: EntityTable
    
    static async createFromDocument(document: VimDocument): Promise<IShapeInShapeCollectionTable | undefined> {
        const entity = await document.entities.getBfast("Vim.ShapeInShapeCollection")
        
        if (!entity) {
            return undefined
        }
        
        let table = new ShapeInShapeCollectionTable()
        table.document = document
        table.entityTable = new EntityTable(entity, document.strings)
        
        return table
    }
    
    async getCount(): Promise<number> {
        return (await this.entityTable.getArray("index:Vim.Shape:Shape"))?.length ?? 0
    }
    
    async get(shapeInShapeCollectionIndex: number, recursive?: boolean): Promise<IShapeInShapeCollection> {
        return await ShapeInShapeCollection.createFromTable(this, shapeInShapeCollectionIndex, recursive)
    }
    
    async getAll(): Promise<IShapeInShapeCollection[]> {
        const localTable = await this.entityTable.getLocal()
        
        let shapeIndex: number[] | undefined
        let shapeCollectionIndex: number[] | undefined
        
        await Promise.all([
            localTable.getArray("index:Vim.Shape:Shape").then(a => shapeIndex = a),
            localTable.getArray("index:Vim.ShapeCollection:ShapeCollection").then(a => shapeCollectionIndex = a),
        ])
        
        let shapeInShapeCollection: IShapeInShapeCollection[] = []
        
        for (let i = 0; i <= shapeIndex!.length; i++) {
            shapeInShapeCollection.push({
                index: i,
                shapeIndex: shapeIndex ? shapeIndex[i] : undefined,
                shapeCollectionIndex: shapeCollectionIndex ? shapeCollectionIndex[i] : undefined
            })
        }
        
        return shapeInShapeCollection
    }
    
    async getShapeIndex(shapeInShapeCollectionIndex: number): Promise<number | undefined> {
        return await this.entityTable.getNumber(shapeInShapeCollectionIndex, "index:Vim.Shape:Shape")
    }
    
    async getAllShapeIndex(): Promise<number[] | undefined> {
        return await this.entityTable.getArray("index:Vim.Shape:Shape")
    }
    
    async getShape(shapeInShapeCollectionIndex: number, recursive?: boolean): Promise<IShape | undefined> {
        const index = await this.getShapeIndex(shapeInShapeCollectionIndex)
        
        if (index === undefined) {
            return undefined
        }
        
        return await this.document.shape?.get(index, recursive)
    }
    
    async getShapeCollectionIndex(shapeInShapeCollectionIndex: number): Promise<number | undefined> {
        return await this.entityTable.getNumber(shapeInShapeCollectionIndex, "index:Vim.ShapeCollection:ShapeCollection")
    }
    
    async getAllShapeCollectionIndex(): Promise<number[] | undefined> {
        return await this.entityTable.getArray("index:Vim.ShapeCollection:ShapeCollection")
    }
    
    async getShapeCollection(shapeInShapeCollectionIndex: number, recursive?: boolean): Promise<IShapeCollection | undefined> {
        const index = await this.getShapeCollectionIndex(shapeInShapeCollectionIndex)
        
        if (index === undefined) {
            return undefined
        }
        
        return await this.document.shapeCollection?.get(index, recursive)
    }
    
}

export interface ISystem {
    index: number
    systemType?: number
    
    elementIndex?: number
    element?: IElement
}

export interface ISystemTable {
    getCount(): Promise<number>
    get(systemIndex: number, recursive?: boolean): Promise<ISystem>
    getAll(): Promise<ISystem[]>
    
    getSystemType(systemIndex: number): Promise<number | undefined>
    getAllSystemType(): Promise<number[] | undefined>
    
    getElementIndex(systemIndex: number): Promise<number | undefined>
    getAllElementIndex(): Promise<number[] | undefined>
    getElement(systemIndex: number, recursive?: boolean): Promise<IElement | undefined>
}

export class System implements ISystem {
    index: number
    systemType?: number
    
    elementIndex?: number
    element?: IElement
    
    static async createFromTable(table: ISystemTable, index: number, recursive: boolean = false): Promise<ISystem> {
        let result = new System()
        result.index = index
        
        await Promise.all([
            table.getSystemType(index).then(v => result.systemType = v),
            table.getElementIndex(index).then(v => result.elementIndex = v),
        ])
        
        if (recursive) {
            await Promise.all([
                table.getElement(index).then(v => result.element = v),
            ])
        }
        
        return result
    }
}

export class SystemTable implements ISystemTable {
    private document: VimDocument
    private entityTable: EntityTable
    
    static async createFromDocument(document: VimDocument): Promise<ISystemTable | undefined> {
        const entity = await document.entities.getBfast("Vim.System")
        
        if (!entity) {
            return undefined
        }
        
        let table = new SystemTable()
        table.document = document
        table.entityTable = new EntityTable(entity, document.strings)
        
        return table
    }
    
    async getCount(): Promise<number> {
        return (await this.entityTable.getArray("int:SystemType"))?.length ?? 0
    }
    
    async get(systemIndex: number, recursive?: boolean): Promise<ISystem> {
        return await System.createFromTable(this, systemIndex, recursive)
    }
    
    async getAll(): Promise<ISystem[]> {
        const localTable = await this.entityTable.getLocal()
        
        let systemType: number[] | undefined
        let elementIndex: number[] | undefined
        
        await Promise.all([
            localTable.getArray("int:SystemType").then(a => systemType = a),
            localTable.getArray("index:Vim.Element:Element").then(a => elementIndex = a),
        ])
        
        let system: ISystem[] = []
        
        for (let i = 0; i <= systemType!.length; i++) {
            system.push({
                index: i,
                systemType: systemType ? systemType[i] : undefined,
                elementIndex: elementIndex ? elementIndex[i] : undefined
            })
        }
        
        return system
    }
    
    async getSystemType(systemIndex: number): Promise<number | undefined>{
        return await this.entityTable.getNumber(systemIndex, "int:SystemType")
    }
    
    async getAllSystemType(): Promise<number[] | undefined>{
        return await this.entityTable.getArray("int:SystemType")
    }
    
    async getElementIndex(systemIndex: number): Promise<number | undefined> {
        return await this.entityTable.getNumber(systemIndex, "index:Vim.Element:Element")
    }
    
    async getAllElementIndex(): Promise<number[] | undefined> {
        return await this.entityTable.getArray("index:Vim.Element:Element")
    }
    
    async getElement(systemIndex: number, recursive?: boolean): Promise<IElement | undefined> {
        const index = await this.getElementIndex(systemIndex)
        
        if (index === undefined) {
            return undefined
        }
        
        return await this.document.element?.get(index, recursive)
    }
    
}

export interface IElementInSystem {
    index: number
    roles?: number
    
    systemIndex?: number
    system?: ISystem
    elementIndex?: number
    element?: IElement
}

export interface IElementInSystemTable {
    getCount(): Promise<number>
    get(elementInSystemIndex: number, recursive?: boolean): Promise<IElementInSystem>
    getAll(): Promise<IElementInSystem[]>
    
    getRoles(elementInSystemIndex: number): Promise<number | undefined>
    getAllRoles(): Promise<number[] | undefined>
    
    getSystemIndex(elementInSystemIndex: number): Promise<number | undefined>
    getAllSystemIndex(): Promise<number[] | undefined>
    getSystem(elementInSystemIndex: number, recursive?: boolean): Promise<ISystem | undefined>
    getElementIndex(elementInSystemIndex: number): Promise<number | undefined>
    getAllElementIndex(): Promise<number[] | undefined>
    getElement(elementInSystemIndex: number, recursive?: boolean): Promise<IElement | undefined>
}

export class ElementInSystem implements IElementInSystem {
    index: number
    roles?: number
    
    systemIndex?: number
    system?: ISystem
    elementIndex?: number
    element?: IElement
    
    static async createFromTable(table: IElementInSystemTable, index: number, recursive: boolean = false): Promise<IElementInSystem> {
        let result = new ElementInSystem()
        result.index = index
        
        await Promise.all([
            table.getRoles(index).then(v => result.roles = v),
            table.getSystemIndex(index).then(v => result.systemIndex = v),
            table.getElementIndex(index).then(v => result.elementIndex = v),
        ])
        
        if (recursive) {
            await Promise.all([
                table.getSystem(index).then(v => result.system = v),
                table.getElement(index).then(v => result.element = v),
            ])
        }
        
        return result
    }
}

export class ElementInSystemTable implements IElementInSystemTable {
    private document: VimDocument
    private entityTable: EntityTable
    
    static async createFromDocument(document: VimDocument): Promise<IElementInSystemTable | undefined> {
        const entity = await document.entities.getBfast("Vim.ElementInSystem")
        
        if (!entity) {
            return undefined
        }
        
        let table = new ElementInSystemTable()
        table.document = document
        table.entityTable = new EntityTable(entity, document.strings)
        
        return table
    }
    
    async getCount(): Promise<number> {
        return (await this.entityTable.getArray("int:Roles"))?.length ?? 0
    }
    
    async get(elementInSystemIndex: number, recursive?: boolean): Promise<IElementInSystem> {
        return await ElementInSystem.createFromTable(this, elementInSystemIndex, recursive)
    }
    
    async getAll(): Promise<IElementInSystem[]> {
        const localTable = await this.entityTable.getLocal()
        
        let roles: number[] | undefined
        let systemIndex: number[] | undefined
        let elementIndex: number[] | undefined
        
        await Promise.all([
            localTable.getArray("int:Roles").then(a => roles = a),
            localTable.getArray("index:Vim.System:System").then(a => systemIndex = a),
            localTable.getArray("index:Vim.Element:Element").then(a => elementIndex = a),
        ])
        
        let elementInSystem: IElementInSystem[] = []
        
        for (let i = 0; i <= roles!.length; i++) {
            elementInSystem.push({
                index: i,
                roles: roles ? roles[i] : undefined,
                systemIndex: systemIndex ? systemIndex[i] : undefined,
                elementIndex: elementIndex ? elementIndex[i] : undefined
            })
        }
        
        return elementInSystem
    }
    
    async getRoles(elementInSystemIndex: number): Promise<number | undefined>{
        return await this.entityTable.getNumber(elementInSystemIndex, "int:Roles")
    }
    
    async getAllRoles(): Promise<number[] | undefined>{
        return await this.entityTable.getArray("int:Roles")
    }
    
    async getSystemIndex(elementInSystemIndex: number): Promise<number | undefined> {
        return await this.entityTable.getNumber(elementInSystemIndex, "index:Vim.System:System")
    }
    
    async getAllSystemIndex(): Promise<number[] | undefined> {
        return await this.entityTable.getArray("index:Vim.System:System")
    }
    
    async getSystem(elementInSystemIndex: number, recursive?: boolean): Promise<ISystem | undefined> {
        const index = await this.getSystemIndex(elementInSystemIndex)
        
        if (index === undefined) {
            return undefined
        }
        
        return await this.document.system?.get(index, recursive)
    }
    
    async getElementIndex(elementInSystemIndex: number): Promise<number | undefined> {
        return await this.entityTable.getNumber(elementInSystemIndex, "index:Vim.Element:Element")
    }
    
    async getAllElementIndex(): Promise<number[] | undefined> {
        return await this.entityTable.getArray("index:Vim.Element:Element")
    }
    
    async getElement(elementInSystemIndex: number, recursive?: boolean): Promise<IElement | undefined> {
        const index = await this.getElementIndex(elementInSystemIndex)
        
        if (index === undefined) {
            return undefined
        }
        
        return await this.document.element?.get(index, recursive)
    }
    
}

export interface IWarning {
    index: number
    guid?: string
    severity?: string
    description?: string
    
    bimDocumentIndex?: number
    bimDocument?: IBimDocument
}

export interface IWarningTable {
    getCount(): Promise<number>
    get(warningIndex: number, recursive?: boolean): Promise<IWarning>
    getAll(): Promise<IWarning[]>
    
    getGuid(warningIndex: number): Promise<string | undefined>
    getAllGuid(): Promise<string[] | undefined>
    getSeverity(warningIndex: number): Promise<string | undefined>
    getAllSeverity(): Promise<string[] | undefined>
    getDescription(warningIndex: number): Promise<string | undefined>
    getAllDescription(): Promise<string[] | undefined>
    
    getBimDocumentIndex(warningIndex: number): Promise<number | undefined>
    getAllBimDocumentIndex(): Promise<number[] | undefined>
    getBimDocument(warningIndex: number, recursive?: boolean): Promise<IBimDocument | undefined>
}

export class Warning implements IWarning {
    index: number
    guid?: string
    severity?: string
    description?: string
    
    bimDocumentIndex?: number
    bimDocument?: IBimDocument
    
    static async createFromTable(table: IWarningTable, index: number, recursive: boolean = false): Promise<IWarning> {
        let result = new Warning()
        result.index = index
        
        await Promise.all([
            table.getGuid(index).then(v => result.guid = v),
            table.getSeverity(index).then(v => result.severity = v),
            table.getDescription(index).then(v => result.description = v),
            table.getBimDocumentIndex(index).then(v => result.bimDocumentIndex = v),
        ])
        
        if (recursive) {
            await Promise.all([
                table.getBimDocument(index).then(v => result.bimDocument = v),
            ])
        }
        
        return result
    }
}

export class WarningTable implements IWarningTable {
    private document: VimDocument
    private entityTable: EntityTable
    
    static async createFromDocument(document: VimDocument): Promise<IWarningTable | undefined> {
        const entity = await document.entities.getBfast("Vim.Warning")
        
        if (!entity) {
            return undefined
        }
        
        let table = new WarningTable()
        table.document = document
        table.entityTable = new EntityTable(entity, document.strings)
        
        return table
    }
    
    async getCount(): Promise<number> {
        return (await this.entityTable.getArray("string:Guid"))?.length ?? 0
    }
    
    async get(warningIndex: number, recursive?: boolean): Promise<IWarning> {
        return await Warning.createFromTable(this, warningIndex, recursive)
    }
    
    async getAll(): Promise<IWarning[]> {
        const localTable = await this.entityTable.getLocal()
        
        let guid: string[] | undefined
        let severity: string[] | undefined
        let description: string[] | undefined
        let bimDocumentIndex: number[] | undefined
        
        await Promise.all([
            localTable.getStringArray("string:Guid").then(a => guid = a),
            localTable.getStringArray("string:Severity").then(a => severity = a),
            localTable.getStringArray("string:Description").then(a => description = a),
            localTable.getArray("index:Vim.BimDocument:BimDocument").then(a => bimDocumentIndex = a),
        ])
        
        let warning: IWarning[] = []
        
        for (let i = 0; i <= guid!.length; i++) {
            warning.push({
                index: i,
                guid: guid ? guid[i] : undefined,
                severity: severity ? severity[i] : undefined,
                description: description ? description[i] : undefined,
                bimDocumentIndex: bimDocumentIndex ? bimDocumentIndex[i] : undefined
            })
        }
        
        return warning
    }
    
    async getGuid(warningIndex: number): Promise<string | undefined>{
        return await this.entityTable.getString(warningIndex, "string:Guid")
    }
    
    async getAllGuid(): Promise<string[] | undefined>{
        return await this.entityTable.getStringArray("string:Guid")
    }
    
    async getSeverity(warningIndex: number): Promise<string | undefined>{
        return await this.entityTable.getString(warningIndex, "string:Severity")
    }
    
    async getAllSeverity(): Promise<string[] | undefined>{
        return await this.entityTable.getStringArray("string:Severity")
    }
    
    async getDescription(warningIndex: number): Promise<string | undefined>{
        return await this.entityTable.getString(warningIndex, "string:Description")
    }
    
    async getAllDescription(): Promise<string[] | undefined>{
        return await this.entityTable.getStringArray("string:Description")
    }
    
    async getBimDocumentIndex(warningIndex: number): Promise<number | undefined> {
        return await this.entityTable.getNumber(warningIndex, "index:Vim.BimDocument:BimDocument")
    }
    
    async getAllBimDocumentIndex(): Promise<number[] | undefined> {
        return await this.entityTable.getArray("index:Vim.BimDocument:BimDocument")
    }
    
    async getBimDocument(warningIndex: number, recursive?: boolean): Promise<IBimDocument | undefined> {
        const index = await this.getBimDocumentIndex(warningIndex)
        
        if (index === undefined) {
            return undefined
        }
        
        return await this.document.bimDocument?.get(index, recursive)
    }
    
}

export interface IElementInWarning {
    index: number
    
    warningIndex?: number
    warning?: IWarning
    elementIndex?: number
    element?: IElement
}

export interface IElementInWarningTable {
    getCount(): Promise<number>
    get(elementInWarningIndex: number, recursive?: boolean): Promise<IElementInWarning>
    getAll(): Promise<IElementInWarning[]>
    
    getWarningIndex(elementInWarningIndex: number): Promise<number | undefined>
    getAllWarningIndex(): Promise<number[] | undefined>
    getWarning(elementInWarningIndex: number, recursive?: boolean): Promise<IWarning | undefined>
    getElementIndex(elementInWarningIndex: number): Promise<number | undefined>
    getAllElementIndex(): Promise<number[] | undefined>
    getElement(elementInWarningIndex: number, recursive?: boolean): Promise<IElement | undefined>
}

export class ElementInWarning implements IElementInWarning {
    index: number
    
    warningIndex?: number
    warning?: IWarning
    elementIndex?: number
    element?: IElement
    
    static async createFromTable(table: IElementInWarningTable, index: number, recursive: boolean = false): Promise<IElementInWarning> {
        let result = new ElementInWarning()
        result.index = index
        
        await Promise.all([
            table.getWarningIndex(index).then(v => result.warningIndex = v),
            table.getElementIndex(index).then(v => result.elementIndex = v),
        ])
        
        if (recursive) {
            await Promise.all([
                table.getWarning(index).then(v => result.warning = v),
                table.getElement(index).then(v => result.element = v),
            ])
        }
        
        return result
    }
}

export class ElementInWarningTable implements IElementInWarningTable {
    private document: VimDocument
    private entityTable: EntityTable
    
    static async createFromDocument(document: VimDocument): Promise<IElementInWarningTable | undefined> {
        const entity = await document.entities.getBfast("Vim.ElementInWarning")
        
        if (!entity) {
            return undefined
        }
        
        let table = new ElementInWarningTable()
        table.document = document
        table.entityTable = new EntityTable(entity, document.strings)
        
        return table
    }
    
    async getCount(): Promise<number> {
        return (await this.entityTable.getArray("index:Vim.Warning:Warning"))?.length ?? 0
    }
    
    async get(elementInWarningIndex: number, recursive?: boolean): Promise<IElementInWarning> {
        return await ElementInWarning.createFromTable(this, elementInWarningIndex, recursive)
    }
    
    async getAll(): Promise<IElementInWarning[]> {
        const localTable = await this.entityTable.getLocal()
        
        let warningIndex: number[] | undefined
        let elementIndex: number[] | undefined
        
        await Promise.all([
            localTable.getArray("index:Vim.Warning:Warning").then(a => warningIndex = a),
            localTable.getArray("index:Vim.Element:Element").then(a => elementIndex = a),
        ])
        
        let elementInWarning: IElementInWarning[] = []
        
        for (let i = 0; i <= warningIndex!.length; i++) {
            elementInWarning.push({
                index: i,
                warningIndex: warningIndex ? warningIndex[i] : undefined,
                elementIndex: elementIndex ? elementIndex[i] : undefined
            })
        }
        
        return elementInWarning
    }
    
    async getWarningIndex(elementInWarningIndex: number): Promise<number | undefined> {
        return await this.entityTable.getNumber(elementInWarningIndex, "index:Vim.Warning:Warning")
    }
    
    async getAllWarningIndex(): Promise<number[] | undefined> {
        return await this.entityTable.getArray("index:Vim.Warning:Warning")
    }
    
    async getWarning(elementInWarningIndex: number, recursive?: boolean): Promise<IWarning | undefined> {
        const index = await this.getWarningIndex(elementInWarningIndex)
        
        if (index === undefined) {
            return undefined
        }
        
        return await this.document.warning?.get(index, recursive)
    }
    
    async getElementIndex(elementInWarningIndex: number): Promise<number | undefined> {
        return await this.entityTable.getNumber(elementInWarningIndex, "index:Vim.Element:Element")
    }
    
    async getAllElementIndex(): Promise<number[] | undefined> {
        return await this.entityTable.getArray("index:Vim.Element:Element")
    }
    
    async getElement(elementInWarningIndex: number, recursive?: boolean): Promise<IElement | undefined> {
        const index = await this.getElementIndex(elementInWarningIndex)
        
        if (index === undefined) {
            return undefined
        }
        
        return await this.document.element?.get(index, recursive)
    }
    
}

export interface IBasePoint {
    index: number
    isSurveyPoint?: boolean
    position?: Vector3
    sharedPosition?: Vector3
    
    elementIndex?: number
    element?: IElement
}

export interface IBasePointTable {
    getCount(): Promise<number>
    get(basePointIndex: number, recursive?: boolean): Promise<IBasePoint>
    getAll(): Promise<IBasePoint[]>
    
    getIsSurveyPoint(basePointIndex: number): Promise<boolean | undefined>
    getAllIsSurveyPoint(): Promise<boolean[] | undefined>
    getPosition(basePointIndex: number): Promise<Vector3 | undefined>
    getAllPosition(): Promise<Vector3[] | undefined>
    getSharedPosition(basePointIndex: number): Promise<Vector3 | undefined>
    getAllSharedPosition(): Promise<Vector3[] | undefined>
    
    getElementIndex(basePointIndex: number): Promise<number | undefined>
    getAllElementIndex(): Promise<number[] | undefined>
    getElement(basePointIndex: number, recursive?: boolean): Promise<IElement | undefined>
}

export class BasePoint implements IBasePoint {
    index: number
    isSurveyPoint?: boolean
    position?: Vector3
    sharedPosition?: Vector3
    
    elementIndex?: number
    element?: IElement
    
    static async createFromTable(table: IBasePointTable, index: number, recursive: boolean = false): Promise<IBasePoint> {
        let result = new BasePoint()
        result.index = index
        
        await Promise.all([
            table.getIsSurveyPoint(index).then(v => result.isSurveyPoint = v),
            table.getPosition(index).then(v => result.position = v),
            table.getSharedPosition(index).then(v => result.sharedPosition = v),
            table.getElementIndex(index).then(v => result.elementIndex = v),
        ])
        
        if (recursive) {
            await Promise.all([
                table.getElement(index).then(v => result.element = v),
            ])
        }
        
        return result
    }
}

export class BasePointTable implements IBasePointTable {
    private document: VimDocument
    private entityTable: EntityTable
    
    static async createFromDocument(document: VimDocument): Promise<IBasePointTable | undefined> {
        const entity = await document.entities.getBfast("Vim.BasePoint")
        
        if (!entity) {
            return undefined
        }
        
        let table = new BasePointTable()
        table.document = document
        table.entityTable = new EntityTable(entity, document.strings)
        
        return table
    }
    
    async getCount(): Promise<number> {
        return (await this.entityTable.getArray("byte:IsSurveyPoint"))?.length ?? 0
    }
    
    async get(basePointIndex: number, recursive?: boolean): Promise<IBasePoint> {
        return await BasePoint.createFromTable(this, basePointIndex, recursive)
    }
    
    async getAll(): Promise<IBasePoint[]> {
        const localTable = await this.entityTable.getLocal()
        
        let isSurveyPoint: boolean[] | undefined
        const positionConverter = new Converters.Vector3Converter()
        let position: Vector3[] | undefined
        const sharedPositionConverter = new Converters.Vector3Converter()
        let sharedPosition: Vector3[] | undefined
        let elementIndex: number[] | undefined
        
        await Promise.all([
            localTable.getBooleanArray("byte:IsSurveyPoint").then(a => isSurveyPoint = a),
            Promise.all(positionConverter.columns.map(c => this.entityTable.getArray("double:Position" + c)))
                .then(a => position = Converters.convertArray(positionConverter, a)),
            Promise.all(sharedPositionConverter.columns.map(c => this.entityTable.getArray("double:SharedPosition" + c)))
                .then(a => sharedPosition = Converters.convertArray(sharedPositionConverter, a)),
            localTable.getArray("index:Vim.Element:Element").then(a => elementIndex = a),
        ])
        
        let basePoint: IBasePoint[] = []
        
        for (let i = 0; i <= isSurveyPoint!.length; i++) {
            basePoint.push({
                index: i,
                isSurveyPoint: isSurveyPoint ? isSurveyPoint[i] : undefined,
                position: position ? position[i] : undefined,
                sharedPosition: sharedPosition ? sharedPosition[i] : undefined,
                elementIndex: elementIndex ? elementIndex[i] : undefined
            })
        }
        
        return basePoint
    }
    
    async getIsSurveyPoint(basePointIndex: number): Promise<boolean | undefined>{
        return await this.entityTable.getBoolean(basePointIndex, "byte:IsSurveyPoint")
    }
    
    async getAllIsSurveyPoint(): Promise<boolean[] | undefined>{
        return await this.entityTable.getBooleanArray("byte:IsSurveyPoint")
    }
    
    async getPosition(basePointIndex: number): Promise<Vector3 | undefined>{
        const converter = new Converters.Vector3Converter()
        
        let numbers = await Promise.all(converter.columns.map(c => this.entityTable.getNumber(basePointIndex, "double:Position" + c)))
        
        return Converters.convert(converter, numbers)
    }
    
    async getAllPosition(): Promise<Vector3[] | undefined>{
        const converter = new Converters.Vector3Converter()
        
        let numbers = await Promise.all(converter.columns.map(c => this.entityTable.getArray("double:Position" + c)))
        
        return Converters.convertArray(converter, numbers)
    }
    
    async getSharedPosition(basePointIndex: number): Promise<Vector3 | undefined>{
        const converter = new Converters.Vector3Converter()
        
        let numbers = await Promise.all(converter.columns.map(c => this.entityTable.getNumber(basePointIndex, "double:SharedPosition" + c)))
        
        return Converters.convert(converter, numbers)
    }
    
    async getAllSharedPosition(): Promise<Vector3[] | undefined>{
        const converter = new Converters.Vector3Converter()
        
        let numbers = await Promise.all(converter.columns.map(c => this.entityTable.getArray("double:SharedPosition" + c)))
        
        return Converters.convertArray(converter, numbers)
    }
    
    async getElementIndex(basePointIndex: number): Promise<number | undefined> {
        return await this.entityTable.getNumber(basePointIndex, "index:Vim.Element:Element")
    }
    
    async getAllElementIndex(): Promise<number[] | undefined> {
        return await this.entityTable.getArray("index:Vim.Element:Element")
    }
    
    async getElement(basePointIndex: number, recursive?: boolean): Promise<IElement | undefined> {
        const index = await this.getElementIndex(basePointIndex)
        
        if (index === undefined) {
            return undefined
        }
        
        return await this.document.element?.get(index, recursive)
    }
    
}

export class VimDocument {
    asset: IAssetTable | undefined
    displayUnit: IDisplayUnitTable | undefined
    parameterDescriptor: IParameterDescriptorTable | undefined
    parameter: IParameterTable | undefined
    element: IElementTable | undefined
    workset: IWorksetTable | undefined
    assemblyInstance: IAssemblyInstanceTable | undefined
    group: IGroupTable | undefined
    designOption: IDesignOptionTable | undefined
    level: ILevelTable | undefined
    phase: IPhaseTable | undefined
    room: IRoomTable | undefined
    bimDocument: IBimDocumentTable | undefined
    displayUnitInBimDocument: IDisplayUnitInBimDocumentTable | undefined
    phaseOrderInBimDocument: IPhaseOrderInBimDocumentTable | undefined
    category: ICategoryTable | undefined
    family: IFamilyTable | undefined
    familyType: IFamilyTypeTable | undefined
    familyInstance: IFamilyInstanceTable | undefined
    view: IViewTable | undefined
    elementInView: IElementInViewTable | undefined
    shapeInView: IShapeInViewTable | undefined
    assetInView: IAssetInViewTable | undefined
    camera: ICameraTable | undefined
    material: IMaterialTable | undefined
    materialInElement: IMaterialInElementTable | undefined
    compoundStructureLayer: ICompoundStructureLayerTable | undefined
    compoundStructure: ICompoundStructureTable | undefined
    node: INodeTable | undefined
    geometry: IGeometryTable | undefined
    shape: IShapeTable | undefined
    shapeCollection: IShapeCollectionTable | undefined
    shapeInShapeCollection: IShapeInShapeCollectionTable | undefined
    system: ISystemTable | undefined
    elementInSystem: IElementInSystemTable | undefined
    warning: IWarningTable | undefined
    elementInWarning: IElementInWarningTable | undefined
    basePoint: IBasePointTable | undefined
    
    entities: BFast
    strings: string[]
    
    private constructor(entities: BFast, strings: string[]) {
        this.entities = entities
        this.strings = strings
    }
    
    static async createFromBfast(bfast: BFast): Promise<VimDocument | undefined> {
        const loaded = await VimLoader.loadFromBfast(bfast)
        
        if (loaded === undefined)
            return undefined
        
        let doc = new VimDocument(loaded[0], loaded[1])
        
        doc.asset = await AssetTable.createFromDocument(doc)
        doc.displayUnit = await DisplayUnitTable.createFromDocument(doc)
        doc.parameterDescriptor = await ParameterDescriptorTable.createFromDocument(doc)
        doc.parameter = await ParameterTable.createFromDocument(doc)
        doc.element = await ElementTable.createFromDocument(doc)
        doc.workset = await WorksetTable.createFromDocument(doc)
        doc.assemblyInstance = await AssemblyInstanceTable.createFromDocument(doc)
        doc.group = await GroupTable.createFromDocument(doc)
        doc.designOption = await DesignOptionTable.createFromDocument(doc)
        doc.level = await LevelTable.createFromDocument(doc)
        doc.phase = await PhaseTable.createFromDocument(doc)
        doc.room = await RoomTable.createFromDocument(doc)
        doc.bimDocument = await BimDocumentTable.createFromDocument(doc)
        doc.displayUnitInBimDocument = await DisplayUnitInBimDocumentTable.createFromDocument(doc)
        doc.phaseOrderInBimDocument = await PhaseOrderInBimDocumentTable.createFromDocument(doc)
        doc.category = await CategoryTable.createFromDocument(doc)
        doc.family = await FamilyTable.createFromDocument(doc)
        doc.familyType = await FamilyTypeTable.createFromDocument(doc)
        doc.familyInstance = await FamilyInstanceTable.createFromDocument(doc)
        doc.view = await ViewTable.createFromDocument(doc)
        doc.elementInView = await ElementInViewTable.createFromDocument(doc)
        doc.shapeInView = await ShapeInViewTable.createFromDocument(doc)
        doc.assetInView = await AssetInViewTable.createFromDocument(doc)
        doc.camera = await CameraTable.createFromDocument(doc)
        doc.material = await MaterialTable.createFromDocument(doc)
        doc.materialInElement = await MaterialInElementTable.createFromDocument(doc)
        doc.compoundStructureLayer = await CompoundStructureLayerTable.createFromDocument(doc)
        doc.compoundStructure = await CompoundStructureTable.createFromDocument(doc)
        doc.node = await NodeTable.createFromDocument(doc)
        doc.geometry = await GeometryTable.createFromDocument(doc)
        doc.shape = await ShapeTable.createFromDocument(doc)
        doc.shapeCollection = await ShapeCollectionTable.createFromDocument(doc)
        doc.shapeInShapeCollection = await ShapeInShapeCollectionTable.createFromDocument(doc)
        doc.system = await SystemTable.createFromDocument(doc)
        doc.elementInSystem = await ElementInSystemTable.createFromDocument(doc)
        doc.warning = await WarningTable.createFromDocument(doc)
        doc.elementInWarning = await ElementInWarningTable.createFromDocument(doc)
        doc.basePoint = await BasePointTable.createFromDocument(doc)
        
        return doc
    }
}