import {
  Approval as ApprovalEvent,
  GovernanceVote as GovernanceVoteEvent,
  NewGovernanceProposal as NewGovernanceProposalEvent,
  Transfer as TransferEvent,
  voteEndingtime as voteEndingtimeEvent
} from "../generated/GovernanceToken/GovernanceToken"
import {
  Approval,
  GovernanceVote,
  NewGovernanceProposal,
  Transfer,
  voteEndingtime
} from "../generated/schema"

export function handleApproval(event: ApprovalEvent): void {
  let entity = new Approval(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.owner = event.params.owner
  entity.spender = event.params.spender
  entity.value = event.params.value

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleGovernanceVote(event: GovernanceVoteEvent): void {
  let entity = new GovernanceVote(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.voter = event.params.voter
  entity.proposalId = event.params.proposalId
  entity.votesFor = event.params.votesFor
  entity.votesAgainst = event.params.votesAgainst

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleNewGovernanceProposal(
  event: NewGovernanceProposalEvent
): void {
  let entity = new NewGovernanceProposal(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.proposalId = event.params.proposalId
  entity.description = event.params.description

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleTransfer(event: TransferEvent): void {
  let entity = new Transfer(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.from = event.params.from
  entity.to = event.params.to
  entity.value = event.params.value

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handlevoteEndingtime(event: voteEndingtimeEvent): void {
  let entity = new voteEndingtime(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.endTime = event.params.endTime

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
