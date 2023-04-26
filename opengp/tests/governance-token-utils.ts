import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  Approval,
  GovernanceVote,
  NewGovernanceProposal,
  Transfer,
  voteEndingtime
} from "../generated/GovernanceToken/GovernanceToken"

export function createApprovalEvent(
  owner: Address,
  spender: Address,
  value: BigInt
): Approval {
  let approvalEvent = changetype<Approval>(newMockEvent())

  approvalEvent.parameters = new Array()

  approvalEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  approvalEvent.parameters.push(
    new ethereum.EventParam("spender", ethereum.Value.fromAddress(spender))
  )
  approvalEvent.parameters.push(
    new ethereum.EventParam("value", ethereum.Value.fromUnsignedBigInt(value))
  )

  return approvalEvent
}

export function createGovernanceVoteEvent(
  voter: Address,
  proposalId: BigInt,
  votesFor: BigInt,
  votesAgainst: BigInt
): GovernanceVote {
  let governanceVoteEvent = changetype<GovernanceVote>(newMockEvent())

  governanceVoteEvent.parameters = new Array()

  governanceVoteEvent.parameters.push(
    new ethereum.EventParam("voter", ethereum.Value.fromAddress(voter))
  )
  governanceVoteEvent.parameters.push(
    new ethereum.EventParam(
      "proposalId",
      ethereum.Value.fromUnsignedBigInt(proposalId)
    )
  )
  governanceVoteEvent.parameters.push(
    new ethereum.EventParam(
      "votesFor",
      ethereum.Value.fromUnsignedBigInt(votesFor)
    )
  )
  governanceVoteEvent.parameters.push(
    new ethereum.EventParam(
      "votesAgainst",
      ethereum.Value.fromUnsignedBigInt(votesAgainst)
    )
  )

  return governanceVoteEvent
}

export function createNewGovernanceProposalEvent(
  proposalId: BigInt,
  description: string
): NewGovernanceProposal {
  let newGovernanceProposalEvent = changetype<NewGovernanceProposal>(
    newMockEvent()
  )

  newGovernanceProposalEvent.parameters = new Array()

  newGovernanceProposalEvent.parameters.push(
    new ethereum.EventParam(
      "proposalId",
      ethereum.Value.fromUnsignedBigInt(proposalId)
    )
  )
  newGovernanceProposalEvent.parameters.push(
    new ethereum.EventParam(
      "description",
      ethereum.Value.fromString(description)
    )
  )

  return newGovernanceProposalEvent
}

export function createTransferEvent(
  from: Address,
  to: Address,
  value: BigInt
): Transfer {
  let transferEvent = changetype<Transfer>(newMockEvent())

  transferEvent.parameters = new Array()

  transferEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  transferEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  transferEvent.parameters.push(
    new ethereum.EventParam("value", ethereum.Value.fromUnsignedBigInt(value))
  )

  return transferEvent
}

export function createvoteEndingtimeEvent(endTime: BigInt): voteEndingtime {
  let voteEndingtimeEvent = changetype<voteEndingtime>(newMockEvent())

  voteEndingtimeEvent.parameters = new Array()

  voteEndingtimeEvent.parameters.push(
    new ethereum.EventParam(
      "endTime",
      ethereum.Value.fromUnsignedBigInt(endTime)
    )
  )

  return voteEndingtimeEvent
}
